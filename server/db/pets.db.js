const connection = require('./connection')

function getAllPets(db = connection) {
  return db('pets').select()
}

// Create a new db function to get the information from the database that we need.
function getPetById(id, db = connection) {
  console.log(id)
  return db('pets').select().where('id', id).first()
}



function getPetsByUserId(auth0_id, db = connection) {
  return db('pets').where('owner_id', auth0_id)
}




module.exports = {
  getAllPets,
  getPetById,
  getPetsByUserId,
}
