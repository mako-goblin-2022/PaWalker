import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../client/index.css'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

import { getUsers } from '../../client/apis/usersApi'

import { Route, Routes } from 'react-router-dom'

import Users from './Users'
import Login from './Login'
import Walkers from './Walkers'
import ReviewForm from './ReviewForm'
import MyProfile from './MyProfile'

import UserProfile from './UserProfile'
import Pets from './Pets'
import WalkHistory from './WalkHistory'

// import '../../client/index.css'

function App() {
  cacheUser(useAuth0)
  return (
    <div>
      <h1>Hello</h1>
      <Login />
      {/* <h1>Hello</h1> */}

      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserProfile />} />
        <Route path='/users/myProfile' element={<MyProfile />} />
        <Route path='/users/myProfile/walkHistory' element={<WalkHistory />} />
        <Route path='/pets' element={<Pets />} />
        <Route path='/Review' element={<ReviewForm />} />
      </Routes>
    </div>
  )
}

export default App
