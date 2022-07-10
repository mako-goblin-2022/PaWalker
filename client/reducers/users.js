import { SET_USERS } from '../actions/usersIndex'

const initialUsersState = []

function usersReducer(state = initialUsersState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_USERS:
      return payload
    default:
      return state
  }
}

export default usersReducer
