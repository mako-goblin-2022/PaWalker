import React, { useState, useEffect } from 'react'

import { getUsers } from '../../client/apis/usersApi'

import { Route, Routes } from 'react-router-dom'

import Users from './Users'

import UserProfile from './UserProfile'

// import '../../client/index.css'

function App() {
  return (
    <div>
      <h1>Hello</h1>
      
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>

      <UserProfile />
    </div>
  )
}

export default App
