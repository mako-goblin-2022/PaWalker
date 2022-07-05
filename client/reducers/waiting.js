import { SHOW_ERROR, REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../actions'

function waiting(state = false, action) {
  const { type } = action

  switch (type) {
    case REQUEST_PRODUCTS:
      return true
    case RECEIVE_PRODUCTS:
      return false
    case SHOW_ERROR:
      return false
    default:
      return state
  }
}

export default waiting
