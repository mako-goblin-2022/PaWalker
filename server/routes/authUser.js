const express = require('express')
const checkJwt = require('../.././server/auth0')
const db = require('../db/authDB')
const dbUsers = require('../db/users.db')

const router = express.Router()

// PUT /api/v1/users
router.put('/', checkJwt, async (req, res) => {
  const userForm = req.body.user
  const auth0Id = req.auth.sub
  console.log(userForm)
  console.log(auth0Id)

  try {
    const user = await db.updateUser(auth0Id, userForm)
    console.log(user)
    res.json({ user })
  } catch (err) {
    console.error(err)
    if (err.message === 'Unauthorized') {
      res.status(403).send('Unauthorized: only logged in users may update their data')
      return
    }
    res.status(500).send(err.message)
  }
})

// POST /api/v1/users
router.post('/', checkJwt, async (req, res) => {
  const { auth0Id, name, email } = req.body
  const user = {
    auth0_id: auth0Id,
    name,
    email,
  }
  try {
    // check if user exists using new db function that takes auth id as param
    const dbUser = await dbUsers.getUserById(auth0Id)
    // console.log(userExists)
    if (dbUser) return res.json(dbUser)
    await db.createUser(user)
    res.status(201).json(req.body)
  } catch (err) {
    console.log(err)
    console.log(err.code)
    if (err.code === 'SQLITE_CONSTRAINT_PRIMARYKEY') {
      res.status(200).json(req.body)
    } else {
      res.status(500).send(err.message)
    }
  }
})

module.exports = router
