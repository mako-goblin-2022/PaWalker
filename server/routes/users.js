const express = require('express')

const db = require('../db/users.db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllUsers()
    .then((results) => {
      res.json({ users: results })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.get('/:id', (req, res) => {
  const userId = req.params.id
  console.log(userId)
  db.getUserById(userId)
    .then((result) => {
      console.log(result)
      res.json(result)
      return null
    })
    //   res.json({
    //     status: 200,
    //     result: res,
    //   })
    // })
    .catch((err) => res.status(500).send(err))
})

// router.get('/pets/:id', (req, res) => {
//   const petId = req.params.id
//   // console.log(userId)
//   db.getUserByPetId(petId)
//     .then((result) => {
//       console.log(result)
//       res.json(result)
//       return null
//     })
//     .catch((err) => res.status(500).send(err))
// })

module.exports = router
