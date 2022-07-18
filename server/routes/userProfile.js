const express = require('express')

const db = require('../db/user.db')
const checkJwt = require('../auth0')
const router = express.Router()

// add pets to user history
// router.put('/history', checkJwt, (req, res) => {
router.put('/:id/history', (req, res) => {
  // const { petToAdd } = req.body
  // const reviewer_id = req.user?.sub
  const userId = req.params.id

  db.addToHistory(1, 1)
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
})

module.exports = router
