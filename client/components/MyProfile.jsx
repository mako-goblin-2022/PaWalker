import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllUsers } from '../features/users/usersSlice'

function MyProfile() {
  const dispatch = useDispatch()

  const allUserProfile = useSelector((state) => {
    console.log(state.user.users)
    return state.user.users
  })

  const myProfileId = useSelector((state) => {
    console.log(state.auth.user.auth0Id)
    return state.auth.user.auth0Id
  })

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])

  // object containing my profile details
  const myProfile = allUserProfile?.filter((user) => user.auth0_id === myProfileId)[0]
  console.log(myProfile)

  // need to display all my user profile

  // need to be able to update / delete my profile

  return <div></div>
}

export default MyProfile
