import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllWalkers() {
  return request.get(rootUrl + '/walkers').then((res) => {
    return res.body.walkers
  })
}

export function getWalkerById(walkerId) {
  return request.get(rootUrl + `/walkers/${walkerId}`).then((res) => res.body)
}

export function getWalkersByUserId(walkerId) {
  return request.get(rootUrl + `/walkers/${walkerId}`).then((res) => res.body)
}