import { getUsers } from "../apis/apiUsersList";

export const DEL_USERS = 'DEL_USERS'
export const SET_USERS = 'SET_USERS'
export const UPDATE_USERS = 'UPDATE_USERS'

export function setUsers(users) {
  return {
    type: SET_USERS,
    payload: users,
  }
}

export const updateUsers = (oldName, newName) => {
  return {
    type: UPDATE_USERS,
    payload: { oldName, newName },
  }
}

export const deleteUser = (users) => {
  return {
    type: DEL_USERS,
    payload: users,
  }
}
export function fetchUsers() {
  return (dispatch) => {
    return getUsers().then((users) => {
      dispatch(setUsers(users))
      return null
    })
  }
}