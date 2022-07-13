const path = require('path')
const express = require('express')
const server = express()

const fruitRoutes = require('./routes/fruits')

const petRoutes = require('./routes/pets')
const reviewRoutes = require('./routes/reviews')
const userRoutes = require('./routes/users')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)

server.use('/api/v1/pets', petRoutes)
server.use('/api/v1/reviews', reviewRoutes)
server.use('/api/v1/users', userRoutes)

module.exports = server
