import request from 'superagent'

const serverUrl = '/api/v1'

export function getWelcome() {
  return request.get(`${serverUrl}/welcome`).then((response) => response.body)
}

export function getProducts() {
  return request
    .get(`${serverUrl}/product`)
    .then((response) => {
      const products = response.body
      return products
    })
    .catch((err) => {
      console.log(err)
    })
}