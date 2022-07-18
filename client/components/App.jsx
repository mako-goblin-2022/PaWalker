import React from 'react'
import '../../client/index.css'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

import { Route, Routes } from 'react-router-dom'

import Users from './Users'
import Login from './Login'
import Walkers from './Walkers'
import Navbar from './Header'
import UserProfile from './UserProfile'
import Pets from './Pets'
import Footer from './Footer'
import OwnerProfileForm from './OwnerProfileForm'

// import '../../client/index.css'

function App() {
  cacheUser(useAuth0)

  return (
    <main className="w-full h-full">
      <Navbar />
      {/* <Login /> */}
      {/* <Users /> */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/walkers" element={<Walkers />} />
        <Route path="register" element={<OwnerProfileForm />} />
      </Routes>
      {/* <UserProfile /> */}
      <Footer />
    </main>
  )
}

export default App
