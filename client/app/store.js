import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import petsReducer from '../features/users/petsSlice'
import walkersReducer from '../features/users/walkersSlice'
import authReducer from '../features/auth/authSlice'

export default configureStore({
  reducer: {
    user: usersReducer,
    pet: petsReducer,
    walker: walkersReducer,
    auth: authReducer,
  },
})
