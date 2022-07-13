const express = require('express')

const db = require('../db/pets.db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getPets()
    .then(((result)s) => {
      res.json({ pets: results.map(((pe)t) => pet.name) })
      return null
    })
    .catch(((er)r) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
