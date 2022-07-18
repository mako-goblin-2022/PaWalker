import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllReviews } from '../../apis/reviewsApi'

export const fetchAllReviews = createAsyncThunk(
  'user/fetchAllReviews',
  async (thunkAPI) => {
    const reviewRes = await getAllReviews()
    return reviewRes
  }
)

const initialState = {
  reviews: [],
}

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllReviews.fulfilled, (state, action) => {
      console.log(action)
      state.reviews = action.payload
    })
  },
})

export default reviewsSlice.reducer
