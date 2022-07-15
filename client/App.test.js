import { render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import { fetchAllUsers } from '../actions'
import store from '../store'

jest.mock('../actions')

fetchAllUsers.mockImplementation(() => () => {})

test('page header includes users', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toMatch(/users/)
})

test('renders an <li> for each user', () => {
  const users = ['Charline', 'Violetta', 'Nessa']
  jest.spyOn(store, 'getState')
  store.getState.mockImplementation(() => ({ users }))

  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const li = screen.getAllByRole('listitem')
  expect(li).toHaveLength(3)
})

test('dispatches fetchAllUsers action', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(fetchAllUsers).toHaveBeenCalled()
})
