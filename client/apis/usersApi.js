import request from 'superagent'

const rootUrl = '/api/v1'

export function getUsers() {
  return request.get(rootUrl + '/users').then((res) => {
    return res.body.users
  })
}

export function getUserById(userId) {
  return request.get(rootUrl + `/users/${userId}`).then((res) => res.body)
}
