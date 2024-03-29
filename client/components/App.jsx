import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import '../../client/index.css'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { fetchAllPets } from '../features/users/petsSlice'
import { fetchAllReviews } from '../features/users/reviewsSlice'
// import { fetchAllUsers } from '../features/users/usersSlice'

//? ------- Components --------
import Users from './Users'
import Login from './Login'
import Walkers from './Walkers'
import UserProfile from './UserProfile'
import Pets from './Pets'
import Footer from './Footer'
import Rank from './Rank'
import OwnerProfileForm from './OwnerProfileForm'
import MyProfile from './MyProfile'
import PetProfile from './PetProfile'
import WalkHistory from './WalkHistory'
import ReviewForm from './ReviewForm'

function App() {
  const dispatch = useDispatch()

  cacheUser(useAuth0)

  useEffect(() => {
    dispatch(fetchAllPets())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchAllReviews())
  }, [dispatch])

  return (
    <main className='w-full h-full'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserProfile />} />
        <Route path='/users/:id/WalkHistory' element={<WalkHistory />} />
        <Route path='/pets' element={<Pets />} />
        <Route path='/pets/:id' element={<PetProfile />} />
        <Route path='/pets/:id/review' element={<ReviewForm />} />
        <Route path='/walkers' element={<Walkers />} />
        <Route path='/rank' element={<Rank />} />
        <Route path='/users/myProfile' element={<MyProfile />} />
        <Route path='/users/myProfile/walkHistory' element={<WalkHistory />} />
        <Route path='/register' element={<OwnerProfileForm />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
