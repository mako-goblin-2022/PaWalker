const express = require('express')

const db = require('../db/reviews.db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getReviews()
    .then(((result)s) => {
      res.json({ reviews: results.map(((revie)w) => review.name) })
      return null
    })
    .catch(((er)r) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
