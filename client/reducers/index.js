import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import produreds from '../reducers/prodreds'
import waiting from './waiting'
import loggedInUser from './loggedInUser'
import usersReducer from './users'

export default combineReducers({
  errorMessage,
  produreds,
  waiting,
  loggedInUser,
  users: usersReducer,
})
