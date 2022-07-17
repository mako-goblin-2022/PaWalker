import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Nav() {
  return (
    <div className='flex justify-end'>
      <Link className='' to={'/pets'}>
        View Pets
      </Link>
      <Link className='ml-7' to={'/users/myProfile'}>
        My Profile
      </Link>
      <Link className='mx-7' to={'/users/myProfile/walkHistory'}>
        View My Walk History
      </Link>
      <Login />
    </div>
  )
}

export default Nav
