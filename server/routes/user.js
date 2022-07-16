const express = require('express')

const db = require('../db/user.db')
const checkJwt = require('../auth0')
const router = express.Router()

// add pets to user history
router.put('/history', checkJwt, (req, res) => {
  const { petToAdd } = req.body
  const reviewer_id = req.user?.sub

  db.addToHistory(reviewer_id, petToAdd)
    .then((result) => res.json(result))
    .catch((err) => console.log(err))
})
