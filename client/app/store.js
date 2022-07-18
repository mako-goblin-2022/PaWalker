import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import petsReducer from '../features/users/petsSlice'
import walkersReducer from '../features/users/walkersSlice'
import authSlice from '../features/auth/authSlice'

export default configureStore({
  reducer: {
    user: usersReducer,
    auth: authSlice,
    pet: petsReducer,
    walker: walkersReducer,
  },
})
