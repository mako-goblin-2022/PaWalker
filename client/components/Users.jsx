import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
// import { fetchUsers } from '../actions/users' // we do not need actions for RTK -> actions get auto generated

function Users() {
  const usersDisplay = useSelector((state) => state.users)
  const dispatch = useDispatch()
  // console.log(usersDisplay)

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [dispatch])

  return (
    <main className="">
      {usersDisplay &&
        usersDisplay.map((user, i) => (
          <section key={i} className="">
            <div>
              <img className="" src={user.image} alt={user.name} />
            </div>
            <div>
              <h3 className="">{user.name}</h3>
            </div>
            <div>
              <h3 className="">{user.location}</h3>
            </div>
          </section>
        ))}
    </main>
  )
}

export default Users
