import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllUsers() {
  return request.get(rootUrl + '/users').then((res) => {
    return res.body.users
  })
}

export function getUserById(userId) {
  return request.get(rootUrl + `/users/${userId}`).then((res) => res.body)
}

// export function getUserByPetId(petId) {
//   return request.get(rootUrl + `/users/pets/${petId}`).then((res) => res.body)
// }
