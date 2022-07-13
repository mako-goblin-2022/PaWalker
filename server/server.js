
const path = require('path')
const express = require('express')
const server = express()

const fruitRoutes = require('./routers/fruits')

const petRoutes = require('./routers/pets')
const reviewRoutes = require('./routers/reviews')
const userRoutes = require('./routers/users')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)

server.use('/api/v1/pets', petRoutes)
server.use('/api/v1/reviews', reviewRoutes)
server.use('/api/v1/users', userRoutes)

module.exports = server