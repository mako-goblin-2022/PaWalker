import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import petsReducer from '../features/users/petsSlice'
import walkersReducer from '../features/users/walkersSlice'



export default configureStore({
  reducer: {
    user: usersReducer,
    pet: petsReducer,
    walker: walkersReducer,
  },
})
