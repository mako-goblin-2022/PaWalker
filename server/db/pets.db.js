const connection = require('./connection')

function getPets(db = connection) {
  return db('pets').select()
}

function getPetsByUserId(auth0_id, db = connection) {
  return db('pets').where('owner_id', auth0_id)
}

module.exports = {
  getPets,
  getPetsByUserId,
}
