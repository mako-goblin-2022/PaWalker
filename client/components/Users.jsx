import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAllUsers} from '../features/users/usersSlice'


function Users() {
  const usersDisplay = useSelector((state) => {
    // console.log(state)
    return state.user.users
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  // console.log(historyList)

  return (
    <main className=''>
      {usersDisplay.map((user, i) => {
        // console.log(user)
        return (
          <section key={i} className=''>
            <div>
              <img className='w-44' src={user.img} alt={user.name} />
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
    </main>
  )
}

export default Users
