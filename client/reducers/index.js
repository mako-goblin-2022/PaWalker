import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import produreds from './produreds'
import waiting from './waiting'

export default combineReducers({
  errorMessage,
  produreds,
  waiting,
})
