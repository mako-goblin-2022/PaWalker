const express = require('express')

const db = require('../db/users.db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(((result)s) => {
      res.json({ users: results.map(((use)r) => user.name) })
      return null
    })
    .catch(((er)r) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
