import request from 'superagent'


const serverURL = '/api/v1'


export function getUsers() {
  return request
    .get(`${serverURL}/users`)
    .then((response) => {
      return response.body
    })
}