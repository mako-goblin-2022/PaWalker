import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllUsers() {
  return request.get(rootUrl + '/users').then((res) => {
    return res.body.users
    // Global comment for client-side APIs:
    // Could be good to do some checking before returning res.body contents.
    // If the request returns a 500, we won't see the { message }.
  })
}

export function getUserById(userId) {
  return request.get(rootUrl + `/users/${userId}`).then((res) => res.body)
}
