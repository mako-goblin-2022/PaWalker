import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllUsers } from '../features/users/usersSlice'
import Header from './Header'

function MyProfile() {
  const dispatch = useDispatch()

  const allUserProfile = useSelector((state) => {
    console.log(state.user.users)
    return state.user.users
  })

  const myProfileId = useSelector((state) => {
    console.log(state.auth.user.body?.auth0_id)
    return state.auth?.user.body?.auth0_id
  })

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  // object containing my profile details
  const myProfile = allUserProfile?.filter((user) => user.auth0_id === myProfileId)
  console.log(myProfile)

  // need to display all my user profile

  // need to be able to update / delete my profile

  return (
    <div>
      <Header />
      {myProfile &&
        myProfile.map((detail) => {
          return (
            <>
              <div>{detail.name}</div>
              <div>{detail.img}</div>
              <div>{detail.location}</div>
              <div>{detail.bio}</div>
              <div>{detail.phone_number}</div>
              <div>{detail.email}</div>
            </>
          )
        })}
      <Link to='/users/myProfile/walkHistory'>Walk History</Link>
    </div>
  )
}

export default MyProfile
