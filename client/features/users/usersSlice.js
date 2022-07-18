import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllUsers, getUserById } from '../../apis/usersApi'
import { getPetsByUserId } from '../../apis/petsApi'

export const fetchAllUsers = createAsyncThunk('user/fetchAllUsers', async (thunkAPI) => {
  const allUsersResponse = await getAllUsers()
  // console.log(allUsersResponse)
  return allUsersResponse
})

export const fetchUserById = createAsyncThunk(
  // type
  'user/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await getUserById(userId)
    const petResponse = await getPetsByUserId(userId)
    const combinedResponse = {
      userProfile: response,
      petProfile: petResponse,
    }
    console.log(combinedResponse)
    return combinedResponse
  }
)

const initialState = {
  user: {},
  users: [],
  history: [],
}

// reducer function
export const fetchUserByIdFulFilledReducer = (state, action) => {
  console.log(action)
  state.user = action.payload
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // setUserById: (state, action) => {
    //   state.user += 1
    // },
    addToHistory: (state, action) => {
      console.log(action)
      state.history.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      console.log(action)
      state.user = action.payload
    })
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.users = action.payload
    })
  },
})

// builder.addCase(fetchUserById.rejected, (state, action) => {
//   console.log(state, action)
// })
// builder.addCase(fetchUserById.pending, (state, action) => {
//   console.log(state, action)
// })
export const { setUserById, addToHistory } = usersSlice.actions

export default usersSlice.reducer

// builder.addCase(fetchUserById.rejected, (state, action) => {
//   console.log(state, action)
// })
// builder.addCase(fetchUserById.pending, (state, action) => {
//   console.log(state, action)
// })
