import React, { useEffect } from 'react'
import '../../client/index.css'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { fetchAllPets } from '../features/users/petsSlice'
import { fetchAllReviews } from '../features/users/reviewsSlice'
import { fetchAllUsers } from '../features/users/usersSlice'

import { Route, Routes } from 'react-router-dom'

import Users from './Users'
import Login from './Login'
import Walkers from './Walkers'
import Header from './Header'
import UserProfile from './UserProfile'
import Pets from './Pets'
import Footer from './Footer'
import Rank from './Rank'
import OwnerProfileForm from './OwnerProfileForm'
import MyProfile from './MyProfile'
import PetProfile from './PetProfile'

function App() {
  cacheUser(useAuth0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllPets())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchAllReviews())
  }, [])

  return (
    <main className='w-full h-full'>
      {/* <Login /> */}
      {/* <Users /> */}

      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path='/main' element={<Header />} /> */}

        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserProfile />} />
        <Route path='/pets' element={<Pets />} />
        <Route path='/pets/:id' element={<PetProfile />} />
        <Route path='/walkers' element={<Walkers />} />
        <Route path='/rank' element={<Rank />} />
        <Route path='/myProfile' element={<MyProfile />} />

        <Route path='register' element={<OwnerProfileForm />} />
      </Routes>
      {/* <UserProfile /> */}

      <Footer />
    </main>
  )
}

export default App
