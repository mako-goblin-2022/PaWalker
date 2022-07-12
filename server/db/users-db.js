const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]

const connection = require('knex')(config)

function getUsersList(db = connection) {
  return db('users').select()
}

function deleteUser(id, db = connection) {
  return db('users').delete().where({ id: id })
}


module.exports = {
  getUsersList,
  deleteUser,
}