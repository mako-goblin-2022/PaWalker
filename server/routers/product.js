const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getProducts()
    .then((products) => {
      res.json(products)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

// router.patch('/:id', (req, res) => {
//   db.updateProduct(req.params.id, req.body)
//     .then(() => {
//       res.sendStatus(200)
//     })
//     .catch((err) => {
//       console.log(err)
//       res.sendStatus(500)
//     })
// })

// router.get('/:productId', (req, res) => {
//   const id = req.params.productId
//   db.getProduct(id)
//     .then((product) => {
//       console.log('id route hit')
//       res.json(product)
//     })
//     .catch((err) => {
//       console.error(err.message)
//       res.status(500).send('Server error')
//     })
// })





module.exports = router