const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]

const connection = require('knex')(config)

function getUsersList(db = connection) {
  return db('users').select()
}




module.exports = {
  getUsersList,
}