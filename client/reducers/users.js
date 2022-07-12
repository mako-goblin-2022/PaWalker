import { SET_USERS, DEL_USERS } from '../actions/usersIndex'

const initialUsersState = []

function usersReducer(state = initialUsersState, action) {
  const { type, payload } = action
  
  switch (type) {
    case SET_USERS:
      return payload
    // case UPDATE_USERS:
    //   return state.map((users) => {
    //     return users === action.payload.oldUser
    //       ? action.payload.newUser
    //       : users
    //   })
    case DEL_USERS:
      return state.filter((users) => users.auth0_id !== payload)
    default:
      return state
  }
}

export default usersReducer
