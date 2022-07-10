import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'


function LogIn() {
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
      redirectUri:`${window.location.origin}/register` 
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    console.log('sign in')
    loginWithRedirect()
  }

  return (
    <div className=''>
        <IfAuthenticated>
          <a href="/" onClick={handleLogoff}>
            Log off
          </a>
        </IfAuthenticated>
        
        <IfNotAuthenticated>
          <a href="/" onClick={handleRegister}>
            Register
          </a>
          <a href="/" onClick={handleSignIn}>
            Sign in
          </a>
        </IfNotAuthenticated>
    </div>
  )
}

export default LogIn