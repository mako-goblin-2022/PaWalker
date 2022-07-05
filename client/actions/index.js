import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'

const serverUrl = '/api/v1/products'



export function requestProducts() {
  return {
    type: REQUEST_PRODUCTS,
  }
}

export function receiveProducts(prod) {
  return {
    type: RECEIVE_PRODUCTS,
    payload: prod,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}


export function fetchProducts() {
  return (dispatch) => {
    dispatch(requestProducts())
    return request
      .get('http://localhost:3001' + serverUrl)
      .then((res) => {
        dispatch(receiveProducts(res.body))
        return null
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}




