import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../client/index.css'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'


function App () {
  cacheUser(useAuth0)

  return (
    <>
      <div className='text-orange-500 text-center font-extrabold text-3xl'>
        <h1>Tailwind CSS Working!</h1>
        
      </div>
    </>
  )
}

export default App
