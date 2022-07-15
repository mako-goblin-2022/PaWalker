import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { fetchUserById } from '../../features/users/usersSlice'

import UserProfile from '../UserProfile'

jest.mock('../../features/users/usersSlice')

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}))

// mock dispatch?

beforeEach(() => {
  jest.clearAllMocks()
})
afterAll(() => {
  jest.restoreAllMocks()
})

const fakeInitialState = {}

const fakeStore = {
  getState: jest.fn(() => fakeInitialState),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
}

describe('<UserProfile />', () => {
  it('displays user profile', () => {
    useSelector.mockImplementation(() => 'hello')
    render(
      <Provider store={fakeStore}>
        <UserProfile />
      </Provider>
    )
    const userInfo = screen.getAllByRole('heading')
    console.log(userInfo)
    // expect(userInfo[0]).toBe('User Profile')
    // expect(fetchUserById()).toHaveBeenCalled()
  })
})
