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
    <div>
        <IfAuthenticated>
          <button className='w-1/2 cursor-pointer mb-5 uppercase h-9 bg-stone-600 rounded-lg text-slate-50 font-bold  drop-shadow-[0_35px_35px_rgba(0,0,0)] hover:bg-orange-500 hover:text-slate-900 hover:translate-y-px'>
            <a href="/" onClick={handleLogoff}>
              Log off
            </a>
          </button>
        </IfAuthenticated>
        
        <IfNotAuthenticated>
          <a href="/registration" onClick={handleRegister}>
           
          </a>
          <button className='w-1/2 cursor-pointer mb-5 uppercase h-9 bg-stone-600 rounded-lg text-slate-50 font-bold  drop-shadow-[0_35px_35px_rgba(0,0,0)] hover:bg-orange-500 hover:text-slate-900 hover:translate-y-px'>
            <a href="/registration" onClick={handleSignIn}>
              Sign in first please
            </a>
          </button>
        </IfNotAuthenticated>
    </div>
  )
}

export default LogIn