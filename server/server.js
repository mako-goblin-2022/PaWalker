
const path = require('path')
const express = require('express')
const server = express()

const authUserRoutes = require('./routers/authUser.js')
const users = require('./routers/users')
const products = require('../server/routers/product')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', users)
server.use('/api/v1/products', products)
server.use('/api/v1/users', authUserRoutes)


// --------------------------------------------- //

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server