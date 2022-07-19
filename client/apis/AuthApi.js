import request from 'superagent'

// to update existing user
export function updateUser(user, token) {
  console.log(user)
  console.log(token)
  return request
    .put('/api/v1/authusers')
    .set('authorization', `Bearer ${token}`)
    .send({ user })
    .catch((error) => console.log(error.message))
}

// to register a new user
export async function addUser(user) {
  return request
    .post(`/api/v1/authusers`)
    .set('authorization', `Bearer ${user.token}`)
    .send(user)
    .then((res) => res.body)
}
