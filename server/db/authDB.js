const connection = require('./connection')

function getUsers(db = connection) {
  return db('users').select()
}

function updateUser(auth0Id, formUserData, db = connection) {
  console.log(auth0Id)
  console.log(formUserData)
  return db('users')
    .where('auth0_id', auth0Id)
    .update(formUserData)
    .then(() => {
      return { ...formUserData, auth0Id }
    })
}

function createUser(user, db = connection) {
  return db('users').insert(user)
}

function userExists(auth0Id, db = connection) {
  console.log('auth0Id', auth0Id)
  return db('users')
    .count('auth0_id as n')
    .where('auth0_id', auth0Id)
    .then((count) => count[0].n > 0)
}

module.exports = {
  getUsers,
  updateUser,
  createUser,
  userExists,
}
