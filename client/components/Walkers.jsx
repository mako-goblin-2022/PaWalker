import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from '../features/users/usersSlice'

function Walkers() {
  const walkersDisplay = useSelector((state) => {
    // console.log(state.user.users)
    return state.user.users
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <main className='max-w-3xl mx-auto text-center mb-20 grid grid-cols-2 gap-4'>
      {walkersDisplay.map((walkers, i) => {
        // if (walkers.walker === true)

        return (
          <div>
            <div key={i} className='px-2 py-2 rounded-lg mx-auto'>
              <img
                className='rounded-lg object-cover h-48 w-64'
                src={walkers.img}
                alt={walkers.name}
              />

              <h3 className='text-sky-600 font-semibold'>{walkers.name}</h3>
              <h3 className=''>{walkers.location}</h3>
            </div>
          </div>
        )
      })}
    </main>
  )
}

export default Walkers
