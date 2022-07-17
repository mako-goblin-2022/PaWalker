import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllPets() {
  return request.get(rootUrl + '/pets').then((res) => {
    return res.body.pets
  })
}

export function getPetsByUserId(userId) {
  return request.get(rootUrl + `/pets/${userId}`).then((res) => res.body)
}

// Create the api to get the information
export function getPetById(petId) {
  return request.get(rootUrl + `/pets/pet/${petId}`).then((res) => res.body)
}
