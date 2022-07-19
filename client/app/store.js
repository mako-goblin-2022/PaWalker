import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import petsReducer from '../features/users/petsSlice'
import walkersReducer from '../features/users/walkersSlice'
<<<<<<< HEAD
import authSlice from '../features/auth/authSlice'
=======
import authReducer from '../features/auth/authSlice'
>>>>>>> dev

export default configureStore({
  reducer: {
    user: usersReducer,
    auth: authSlice,
    pet: petsReducer,
    walker: walkersReducer,
    auth: authReducer,
  },
})
