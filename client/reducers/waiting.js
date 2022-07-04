import { SHOW_ERROR, REQUEST_PRODUCTS, RECEIVE_POSTS } from '../actions'

function waiting(state = false, action) {
  const { type } = action

  switch (type) {
    case REQUEST_PRODUCTS:
      return true
    case RECEIVE_POSTS:
      return false
    case SHOW_ERROR:
      return false
    default:
      return state
  }
}

export default waiting
