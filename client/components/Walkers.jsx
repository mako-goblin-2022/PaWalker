import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllWalkers } from '../features/users/walkersSlice'

function Walkers() {
  const walkersDisplay = useSelector((state) => {
    console.log(state)
    return state.walker.walkers
  })

  const dispatch = useDispatch()
  console.log(walkersDisplay)

  useEffect(() => {
    dispatch(fetchAllWalkers())
  }, [dispatch])

  return (
    <main className=''>
      {walkersDisplay.map((walker, i) => {
        console.log(walker)
        return (
          <section key={i} className=''>
            <div>
              <img className='' src={walker.img} alt={walker.name} />
            </div>
            <div>
              <h3 className=''>{walker.name}</h3>
            </div>
            <div>
              <h3 className=''>{walker.location}</h3>
            </div>
          </section>
        )
      })}
    </main>
  )
}

export default Walkers
