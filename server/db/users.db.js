const connection = require('./connection')

function getUsersdb(db = connection) {
  return db('users').select()
}

module.exports = {
  getUsers,
}
