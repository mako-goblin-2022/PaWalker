import request from 'superagent'

const serverUrl = '/api/v1/products'


export function getProducts() {
  return request
    .get('http://localhost:3001' + serverUrl)
    .then((response) => {
      const product = response.body
      return product
    })
    .catch((err) => {
      console.log(err)
    })
}