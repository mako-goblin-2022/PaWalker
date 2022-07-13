import { SET_FRUITS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_FRUITS:
      return payload
    default:
      return state
  }
}

<<<<<<< HEAD
export default reducer
=======
export default reducer
>>>>>>> tailwind
