import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllWalkers, getWalkerById } from '../../apis/walkersApi'
// import { getPetsByUserId } from '../../apis/petsApi'




export const fetchAllWalkers = createAsyncThunk(
  'walker/fetchAllWalkers',
  async (thunkAPI) => {
    const allWalkersResponse = await getAllWalkers()
    // console.log(allUsersResponse)
    return allWalkersResponse
  }
)

export const fetchWalkerById = createAsyncThunk(
  'walker/fetchById',
  async (walkerId, thunkAPI) => {
    // const response = await getWalkerById(walkerId)
    const walkerResponse = await getWalkerById(walkerId)
    const combinedResponse = {
      walkerProfile: walkerResponse,
      // petProfile: petResponse,
    }
    // console.log(response)
    return combinedResponse
  }
)

const initialState = {
  walker: {},
  walkers: []// can be whatever
  // newstate
}

export const walkersSlice = createSlice({
  name: 'walkers',
  initialState,
  reducers: {
    // setUserById: (state, action) => {
    //   state.user += 1
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWalkerById.fulfilled, (state, action) => {
      state.walker = action.payload
      
    })
    builder.addCase(fetchAllWalkers.fulfilled, (state, action) => {
      state.walkers = action.payload
    })
  },
})

export const { setWalkerById } = walkersSlice.actions


export default walkersSlice.reducer

