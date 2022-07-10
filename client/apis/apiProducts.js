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

export function patchProduct(product) {
  return request
    .patch( serverUrl + '/' + product.id)
    .send(product)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error('could not save')
      } else {
        return 'success'
      }
    })
}