import userReducer, { fetchUserByIdFulFilledReducer } from '../users/usersSlice'

describe('fetchUserByIdFulFilledReducer', () => {
  it('returns the correct state', () => {
    const initialState = {
      user: {},
    }

    const action = {
      type: 'user/fetchByIdStatus/fulfilled',
      payload: {
        name: 'Charline',
      },
    }

    const newState = userReducer(initialState, action)
    expect(newState.user.name).toBe('Charline')
  })
})
