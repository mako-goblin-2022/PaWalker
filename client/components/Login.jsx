import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

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
      redirectUri:`${window.location.origin}/register` 
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    // console.log('sign in')
    loginWithRedirect()
  }

  return (
    <div className='block text-center' >
        <IfAuthenticated>
        <button className='w-52 cursor-pointer mb-5 m-14 uppercase h-9 bg-teal-600 rounded-3xl text-slate-50 font-bold  drop-shadow-[0_35px_35px_rgba(0,0,0)] hover:bg-orange-500 hover:text-slate-900 hover:translate-y-px'>  <a href="/" onClick={handleLogoff}>
            Log off
          </a></button>
         
        </IfAuthenticated>
        
        <IfNotAuthenticated>
        <button className='w-52 cursor-pointer mb-5 m-14 uppercase h-9 bg-teal-600 rounded-3xl text-slate-50 font-bold  drop-shadow-[0_35px_35px_rgba(0,0,0)] hover:bg-orange-500 hover:text-slate-900 hover:translate-y-px'> <a href="/" onClick={handleRegister}>
            Register
          </a></button>

          <button className='w-52 cursor-pointer mb-5 uppercase h-9 bg-teal-600 rounded-3xl text-slate-50 font-bold  drop-shadow-[0_35px_35px_rgba(0,0,0)] hover:bg-orange-500 hover:text-slate-900 hover:translate-y-px'>  <a href="/" onClick={handleSignIn}>
            Sign in
          </a></button>
        </IfNotAuthenticated>
    </div>
  )
}

export default Login