import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllUsers, addToHistory } from '../features/users/usersSlice'
import WalkHistory from './WalkHistory'

function Users() {
  const usersDisplay = useSelector((state) => {
    // console.log(state)
    return state.user.users
  })

  const dispatch = useDispatch()
  // console.log(usersDisplay)

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])

  // console.log(historyList)

  return (
    <main className=''>
      <Link to={'/users/myProfile'}>My Profile</Link>
      {usersDisplay.map((user, i) => {
        // console.log(user)
        return (
          <section key={i} className=''>
            <div>
              <img className='' src={user.img} alt={user.name} />
            </div>
            <div>
              <h3 className=''>{user.name}</h3>
            </div>
            <div>
              <h3 className=''>{user.location}</h3>
            </div>
          </section>
        )
      })}
      <WalkHistory history={historyList} />
    </main>
  )
}

export default Users
