import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import produreds from '../reducers/prodreds'
import waiting from './waiting'

export default combineReducers({
  errorMessage,
  produreds,
  waiting,
})
