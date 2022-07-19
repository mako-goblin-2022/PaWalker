import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addUser } from '../../apis/AuthApi'

export const saveUser = createAsyncThunk('auth/saveUserId', async (user, thunkAPI) => {
  const response = await addUser(user)
  // console.log(response.status)
  // payload of the action
  return response
})

const initialState = {
  user: {},
  err: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(saveUser.fulfilled, (state, action) => {
      console.log('action: ', action)
      state.user = action.payload
    })
    builder.addCase(saveUser.rejected, (state, action) => {
      state.err = action.payload
    })
  },
})

// export const { saveUser } = authSlice.actions
export default authSlice.reducer
