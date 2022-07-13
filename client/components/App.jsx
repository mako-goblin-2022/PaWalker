import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
<<<<<<< HEAD

import { fetchFruits } from '../actions'
=======
import { fetchFruits } from '../actions'
import '../../client/index.css'

>>>>>>> tailwind

function App () {
  const fruits = useSelector(state => state.fruits)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
<<<<<<< HEAD
  }, [])

  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
=======
  }, [dispatch])

  return (
    <>
      <div className='text-orange-500 text-center font-extrabold text-3xl'>
        <h1>Tailwind CSS Working!</h1>
>>>>>>> tailwind
        <ul>
          {fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
