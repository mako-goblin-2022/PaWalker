const config = require('./knexfile')
const connection = require('./connection')

function getUsers(db = connection) {
  return db('users').select()
}

function getUserById(id, db = connection) {
  return db('users').select().where('auth0_id', id).first()
}

module.exports = {
  getUsers,
  getUserById,
}
