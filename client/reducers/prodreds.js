import { RECEIVE_PRODUCTS} from '../actions'

function produreds(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_PRODUCTS:
      return payload
      
    default:
      return state
  }
}

export default produreds