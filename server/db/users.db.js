const config = require('./knexfile')
const connection = require('./connection')(config)

function getAllUsers(db = connection) {
  return db('users').select()
}

function getUserById(id, db = connection) {
  console.log(id)
  return db('users').select().where('auth0_id', id).first()
}

// function getUserByPetId(ownerId, db = connection) {
//   return db('pets').select().where('owner_id', ownerId)
// }

module.exports = {
  getAllUsers,
  getUserById,
  // getUserByPetId
}
