const connection = require('./connection')

function getAllUsers(db = connection) {
  return db('users').select()
}

function getUserById(id, db = connection) {
  // console.log('from db: ', id)
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
