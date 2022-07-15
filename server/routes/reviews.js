const express = require('express')
const checkJwt = require('../auth0')

const db = require('../db/reviews.db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getReviews()
    .then((results) => {
      res.json(results)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/post', checkJwt, (req, res) => {
  const reviewer_id = req.user?.sub
  // const { reviewForm } = req.body

  db.postReview(reviewer_id, req.body)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
