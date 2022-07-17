import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Login() {
  const { logout, loginWithRedirect } = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()
    console.log('log off')
    logout()
  }

  function handleRegister(e) {
    e.preventDefault()
    console.log('register')
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    console.log('sign in')
    loginWithRedirect()
  }

  return (
    <div>
      <IfAuthenticated>
        <div className='flex'>
          <h1>Hello</h1>

          <a href='/' onClick={handleLogoff}>
            Log off
          </a>
        </div>
      </IfAuthenticated>

      <IfNotAuthenticated>
        <a href='/' onClick={handleRegister}>
          Register
        </a>
        <a href='/' onClick={handleSignIn}>
          Sign in
        </a>
      </IfNotAuthenticated>
    </div>
  )
}

export default Login
