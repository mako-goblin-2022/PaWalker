const path = require('path')
const express = require('express')
const server = express()

const petRoutes = require('./routes/pets')
const reviewRoutes = require('./routes/reviews')
const userRoutes = require('./routes/users')
const userProfileRoutes = require('./routes/userProfile')
const walkerRoutes = require('./routes/walkers')
const authUserRoutes = require('./routes/authUser')


server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/pets', petRoutes)
server.use('/api/v1/reviews', reviewRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/userProfile', userProfileRoutes)
server.use('/api/v1/walkers', walkerRoutes)
<<<<<<< HEAD

||||||| 1288a23


=======
server.use('/api/v1/authusers', authUserRoutes)

>>>>>>> all-users
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
