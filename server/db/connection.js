const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

<<<<<<< HEAD
module.exports = connection
=======
module.exports = connection
>>>>>>> tailwind
