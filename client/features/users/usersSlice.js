import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllUsers, getUserById } from '../../apis/usersApi'
import { getPetsByUserId } from '../../apis/petsApi'




export const fetchAllUsers = createAsyncThunk(
  'user/fetchAllUsers',
  async (thunkAPI) => {
    const allUsersResponse = await getAllUsers()
  
    console.log(allUsersResponse)
    return allUsersResponse
  }
)

export const fetchUserById = createAsyncThunk(
  'user/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await getUserById(userId)
    const petResponse = await getPetsByUserId(userId)
    const combinedResponse = {
      userProfile: response,
      petProfile: petResponse,
    }
    console.log(response)
    return combinedResponse
  }
)

const initialState = {
  user: {},
  // newstate
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // setUserById: (state, action) => {
    //   state.user += 1
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.user = action.payload
    })
    // builder.addCase(fetchUserById.rejected, (state, action) => {
    //   console.log(state, action)
    // })
    // builder.addCase(fetchUserById.pending, (state, action) => {
    //   console.log(state, action)
    // })
  },
})

export const { setUserById } = usersSlice.actions

export default usersSlice.reducer
