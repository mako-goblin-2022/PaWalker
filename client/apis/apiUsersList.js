import request from 'superagent'


const serverURL = '/api/v1'


export function getUsers() {
  return request
    .get(`${serverURL}/users`)
    .then((response) => {
      return response.body
    })
}

export function removeUser(id) {
  console.log(id)
  return request
    .del(serverURL + '/users/' + id)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error('could not save')
      } else {
        return 'success'
      }
    })
}