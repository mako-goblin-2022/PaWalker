import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import Navbar from './Navbar'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'

function Header() {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      return
    }
    console.log(user)
    console.log(user === {})
    const userRegistered = Object.keys(user).every((key) => {
      console.log(key, user[key])
      return user[key] !== null
    })
    console.log(userRegistered)

    if (!userRegistered) {
      navigate('/register')
    }
  }, [user])

  return (
    <header className='w-full h-28 flex sticky mt-0 mb-6 justify-around items-center  bg-blue-900 text-white '>
      <div>
        <img
          className='w-16 rounded-full ml-4 '
          src={'./images/pawalker-logo.png'}
          alt='logo'
        />
        <strong className=' text-2xl drop-shadow-[0_0.5px_0.5px_rgba(250,240,250)] -tracking-tight'>
          PaWalker
        </strong>
      </div>

      <div className='text-right '>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
