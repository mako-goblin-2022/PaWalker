import { RECEIVE_PRODUCTS, UPDATE_PRODUCT } from '../actions'

function produreds(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_PRODUCTS:
      return payload
      case UPDATE_PRODUCT:
      return state.map((product) => {
        if (product.id === payload.id) {
          return { ...product, ...payload }
        }
        return product
      })
    default:
      return state
  }
}

export default produreds