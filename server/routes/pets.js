const express = require('express')

const db = require('../db/pets.db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllPets()
    .then((results) => {
      res.json({ pets: results })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/:id', (req, res) => {
  const petOwnerId = req.params.id
  db.getPetsByUserId(petOwnerId)
    .then((result) => {
      res.json(result)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// Create a new server side route for the api request we are creating.
// This will access the db from a db function.
router.get('/pet/:id', (req, res) => {
  const id = req.params.id
  db.getPetById(id)
    .then((result) => {
      res.json(result)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
