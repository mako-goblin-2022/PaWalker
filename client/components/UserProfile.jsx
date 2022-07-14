import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserById } from '../features/users/usersSlice'

function UserProfile() {
  const params = useParams()
  const dispatch = useDispatch()
  const userId = params.id

  useEffect(() => {
    dispatch(fetchUserById(1))
  }, [])

  let user = useSelector((state) => state.user)

  console.log('user: ', user)

  return <div>Userprdfofile</div>
}

export default UserProfile
