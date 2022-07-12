const path = require('path')
const express = require('express')
const authUserRoutes = require('./routers/authUser.js')

const products = require('../server/routers/product')

const server = express()

const users = require('./routers/users')
server.use('/api/v1/users', users)

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/products', products)
server.use('/api/v1/users', authUserRoutes)

//new add
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server