const express = require('express')
const router = express.Router()

const db = require('../db/users-db')

router.get('/', (req, res) => {
  db.getUsersList()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router