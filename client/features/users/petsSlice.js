import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllPets, getPetById, getPetsByUserId} from '../../apis/petsApi'
// import { getPetByUserId } from '../../apis/petsApi'
// import { getUsersByPetId} from '../../apis/petsApi'

export const fetchAllPets = createAsyncThunk(
  'pet/fetchAllPets',
  async (thunkAPI) => {
    const allPetsResponse = await getAllPets()
    return allPetsResponse
  }
)

export const fetchPetById = createAsyncThunk(
  // Change name here
  'pet/fetchPetById',
  // Change userId
  async (petId, thunkAPI) => {
    // Change API function name to something more correct.
    // Get an individual pet by it's ID (change userId)
    const response = await getPetById(petId)
    return response
  }
)

export const fetchPetsByUserId = createAsyncThunk(
  'pet/getPetsByUserId',
  async (userId, thunkAPI) => {
    const response = await getPetsByUserId(userId)
    return response
  }
)

const initialState = {
  pet: {},
  pets: [],
  history: [],
}

export const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    addToHistoryPet: (state, action) => {
      console.log(action)
      state.history.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPets.fulfilled, (state, action) => {
      // action.payload IS the returned response above.
      // console.log("state", state)
      // console.log("action", action)
      
      state.pets = action.payload
    })
    builder.addCase(fetchPetById.fulfilled, (state, action) => {
      // console.log("action", action)

      state.pet = action.payload
    })
    builder.addCase(fetchPetsByUserId.fulfilled, (state, action) => {
      // console.log('action', action)
      console.log(action)
      state.pet = action.payload
    })
  },
})

export const { addToHistoryPet } = petsSlice.actions

export default petsSlice.reducer
