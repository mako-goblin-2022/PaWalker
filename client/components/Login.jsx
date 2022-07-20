import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'

function Login() {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth.user)

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/main')
  //   }
  //   console.log(isAuthenticated)
  //   // console.log(user)
  //   // console.log(user === {})
  // }, [isAuthenticated])

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
      <img src='./LandingPage/main.jpg' alt='dog-walk' />
      <p>
        Our Story We are a small team of NZ Junior Devs and we have developed an web
        application for assistance on getting someone to walk your pet The journey to
        relaxation. Finding a solution to avoid walking your pets didn’t happen overnight.
        It started off with discovery and research from the great minds of PaWalker, and
        took a lot of hard work to bring the easiest, most intuitive, and thoughtfully
        crafted website to your backyard. Transforming communities. We hope to bring our
        ideas out to other regions but in the meantime it is only NZ based. How we got
        here. In 2022, while we were assigned to our groups final project, our co-founder
        Jay embarked on an impromptu technological adventure that led him to a brilliant
        idea This website is unlike anything Jay had ever seen or felt before, and he knew
        he had to share them with the world. A pet is the only thing on earth that loves
        you more than he/she loves himself/herself.
      </p>
      <div className='block text-center'>
        <IfAuthenticated>
          <button className='w-52 cursor-pointer mb-5 m-14 uppercase h-9 bg-yellow-500 rounded-3xl text-white font-bold  drop-shadow-shadow-2xl hover:bg-yellow-600 hover:text-black hover:translate-y-px'>
            <a href='/' onClick={handleLogoff}>
              Log off
            </a>
          </button>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button className='w-52 cursor-pointer mb-5 m-14 uppercase h-9 bg-yellow-500 rounded-3xl text-white font-bold  drop-shadow-shadow-2xl hover:bg-yellow-600 hover:text-black hover:translate-y-px'>
            <a href='/' onClick={handleRegister}>
              Register
            </a>
          </button>
          <button className='w-52 cursor-pointer mb-5 uppercase h-9 bg-yellow-500 rounded-3xl text-white font-bold  shadow-2xl hover:bg-yellow-600 hover:text-black hover:translate-y-px'>
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
