const config = require('./knexfile')
const connection = require('./connection')(config)

function addToHistory(auth0Id, history, db = connection) {
  return db('users').select().where('auth0_id', auth0Id).update('history', history)
}

module.exports = {
  addToHistory,
}
