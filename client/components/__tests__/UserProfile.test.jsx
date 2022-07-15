import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { fetchUserById } from '../../features/users/usersSlice'

import UserProfile from '../UserProfile'

jest.mock('../../features/users/usersSlice')

jest.mock('react-redux')

// mock dispatch?

const fakeFunct = jest.fn()

beforeAll(() => {
  useSelector.mockImplementation(() => fakeInitialStateS)
  useDispatch.mockImplementation(() => {
    return fakeFunct
  })
})

beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  jest.restoreAllMocks()
})

// use the below when faking the store not the useSelector/useDispatch
// const fakeInitialState = {
//   user: {
//     user: {
//       petProfile: [{ name: 'jay', breed: 'jays', age: 23 }],
//       userProfile: {
//         name: 'Jay',
//       },
//     },
//   },
// }

const fakeInitialStateS = {
  petProfile: [{ name: 'jay', breed: 'jays', age: 23 }],
  userProfile: {
    name: 'Jay',
  },
}

// const fakeStore = {
//   getState: jest.fn(() => fakeInitialState),
//   subscribe: jest.fn(),
//   dispatch: jest.fn(),
// }

describe('<UserProfile />', () => {
  it('displays user profile', () => {
    render(
      //<Provider store={fakeStore}>
      <UserProfile />
      //</Provider>
    )
    const userInfo = screen.getAllByRole('heading')

    expect.assertions(1)
    expect(userInfo[0].innerHTML).toContain('User Profile')
  })
  it('dispatches fetchUserById', () => {
    fetchUserById.mockReturnValue('SUCCESS')
    render(<UserProfile />)
    expect.assertions(1)
    expect(fakeFunct).toHaveBeenCalledWith('SUCCESS')
  })
})
