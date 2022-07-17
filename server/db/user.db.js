const config = require('./knexfile')
const connection = require('./connection')(config)

function addToHistory(userId, db = connection) {
  return db('users').where('auth0_id', userId).update('history', history)
  // return db('users').select().where('auth0_id', userId).first()
}

module.exports = {
  addToHistory,
}
