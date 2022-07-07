import request from 'superagent'
import { patchProduct } from '../../client/apiClient'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

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

export function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    payload: product,
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

export function saveProduct(product) {
  const thunk = (dispatch) => {
    return patchProduct(product)
      .then(() => {
        dispatch(updateProduct(product))
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return thunk
}




