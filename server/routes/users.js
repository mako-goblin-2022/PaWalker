const express = require('express')

const db = require('../db/users.db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then((results) => {
      res.json({ users: results.map((user) => user.name) })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.get('/:id', (req, res) => {
  const userId = req.params.id
  db.getUserById(userId)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
})

module.exports = router
