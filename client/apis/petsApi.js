import request from 'superagent'

const rootUrl = '/api/v1'

export function getPets() {
  return request.get(rootUrl + '/pets')
  return res.body.pets
}
