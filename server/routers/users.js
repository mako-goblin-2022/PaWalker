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

router.patch('/:id', (req, res) => {
  db.updateUser(req.params.id, req.body)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
})

module.exports = router