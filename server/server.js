const path = require('path')
const express = require('express')
const server = express()

const petRoutes = require('./routes/pets')
const reviewRoutes = require('./routes/reviews')
const userRoutes = require('./routes/users')
const walkerRoutes = require('./routes/walkers')
const authUserRoutes = require('./routes/authUser')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/pets', petRoutes)
server.use('/api/v1/reviews', reviewRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/walkers', walkerRoutes)
server.use('/api/v1/authusers', authUserRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
