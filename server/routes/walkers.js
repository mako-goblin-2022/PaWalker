const express = require('express')

const db = require('../db/walkers.db')

const router = express.Router()


router.get('/', (req, res) => {
  db.getAllWalkers()
    .then((results) => {
      res.json({ walkers: results })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})



router.get('/:id', (req, res) => {
  const walkerUserId = req.params.id
  db.getPetsByWalkId(walkerUserId)
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
router.get('/walker/:id', (req, res) => {
  const id = req.params.id
  db.getWalkerById(id)
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