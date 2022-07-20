import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from '../features/users/usersSlice'
import Header from './Header'
import { Link } from 'react-router-dom'

function Walkers() {
  const walkersDisplay = useSelector((state) => {
    // console.log(state.user.users)
    return state.user.users
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  let walker = walkersDisplay?.filter((user) => user.walker === 1)
  console.log(walker)

  return (
    <div>
      <div>
        <Header />
      </div>
      <main className='max-w-3xl mx-auto text-center mb-20 grid grid-cols-2 gap-4'>
        {walker.map((walkers, i) => {
          return (
            <div key={i} className='px-2 py-2 rounded-lg mx-auto'>
              <img
                className='rounded-lg object-cover h-48 w-64 shadow-xl'
                src={walkers.img}
                alt={walkers.name}
              />
              <h3 className='text-blue-600 font-bold'>{walkers.name}</h3>
              <h3 className='font-semibold'>{walkers.location}</h3>
              <Link to={`/users/${walkers.auth0_id}`}>View Profile</Link>
            </div>
          )
        })}
      </main>
    </div>
  )
}
export default Walkers
