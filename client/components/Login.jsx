import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Login() {
  const { logout, loginWithRedirect } = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()
    // console.log('log off')
    logout()
  }

  function handleRegister(e) {
    e.preventDefault()
    // console.log('register')
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    // console.log('sign in')
    loginWithRedirect()
  }

  return (
    <div>
      <div className='block text-center'>
        <IfAuthenticated>
          <button className='w-52 cursor-pointer mb-5 m-14 uppercase h-9 bg-yellow-500 rounded-3xl text-white font-bold  drop-shadow-shadow-2xl hover:bg-yellow-600 hover:text-black hover:translate-y-px'>
            {' '}
            <a href='/' onClick={handleLogoff}>
              Log off
            </a>
          </button>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button className='w-52 cursor-pointer mb-5 m-14 uppercase h-9 bg-yellow-500 rounded-3xl text-white font-bold  drop-shadow-shadow-2xl hover:bg-yellow-600 hover:text-black hover:translate-y-px'>
            {' '}
            <a href='/' onClick={handleRegister}>
              Register
            </a>
          </button>
          <button className='w-52 cursor-pointer mb-5 uppercase h-9 bg-yellow-500 rounded-3xl text-white font-bold  shadow-2xl hover:bg-yellow-600 hover:text-black hover:translate-y-px'>
            {' '}
            <a href='/' onClick={handleSignIn}>
              Sign in
            </a>
          </button>
        </IfNotAuthenticated>
      </div>
  </div>
   
 

    
  )
}

export default Login
