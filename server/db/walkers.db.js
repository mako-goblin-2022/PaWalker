const connection = require('./connection')

function getAllWalkers(db = connection) {
  return db('walkers').select()
}

// Create a new db function to get the information from the database that we need.
function getwalkerById(id, db = connection) {
  console.log(id)
  return db('walkers').select().where('id', id).first()
}

function getWalkersByUserId(auth0_id, db = connection) {
  return db('walkers').where('id', auth0_id)
}

module.exports = {
  getAllWalkers,
  getwalkerById,
  getWalkersByUserId,
}
