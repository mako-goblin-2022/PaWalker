import { getUsers, removeUser } from '../apis/apiUsersList'

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

export const deleteUser = (id) => {
  return {
    type: DEL_USERS,
    payload: id,
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

    // import this from apiUsersList
export function deleteUsers(id) {
  return (dispatch) => {
    return removeUser(id)
      .then((res) => {
        console.log(res.status)
        dispatch(deleteUser(id))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
