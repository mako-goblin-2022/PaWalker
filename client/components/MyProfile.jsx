import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAllUsers } from '../features/users/usersSlice'
import Header from './Header'

function MyProfile() {
  const dispatch = useDispatch()

  const allUserProfile = useSelector((state) => {
    console.log(state.user.users)
    return state.user.users
  })

  const myProfileId = useSelector((state) => {
    console.log(state.auth.user.body?.auth0_id)
    return state.auth?.user.body?.auth0_id
  })

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  // object containing my profile details
  const myProfile = allUserProfile?.filter((user) => user.auth0_id === myProfileId)
  console.log(myProfile)

  // need to display all my user profile

  // need to be able to update / delete my profile

  return (
    <div classname='w-full mx-auto'>
      <Header />
      {myProfile &&
        myProfile.map((detail) => {
          return (
            
            <div className='w-full mx-auto mt-20'>
              <h3 className='w-full text-xl text-center font-semibold'>My profile</h3>
              <form className='w-80 text-slate-800 mt-1 h-auto bg-slate-100 shadow-xl rounded-2xl mx-auto p-3 border border-slate-500'>
                <label>Name</label>
                <div className='bg-slate-200 text-blue-700 h-10 placeholder:w-4/5 m-1 py-2 px-2 mx-auto rounded-xl text-center shadow-xl border border-slate-500'>{detail.name}</div>
                <label>Email</label>
                <div className='bg-slate-200 text-blue-700 h-10 placeholder:w-4/5 m-1 py-2 px-2 mx-auto rounded-xl text-center shadow-xl border border-slate-500'>{detail.email}</div>
                <label>Image</label>
                <div className='bg-slate-200 text-blue-700 h-10 placeholder:w-4/5 m-1 py-2 px-2 mx-auto rounded-xl text-center shadow-xl border border-slate-500'>{detail.img}</div>
                <label>Location</label>
                <div className='bg-slate-200 text-blue-700 h-10 placeholder:w-4/5 m-1 py-2 px-2 mx-auto rounded-xl text-center shadow-xl border border-slate-500'>{detail.location}</div>
                <label>Bio</label>
                <div className='bg-slate-200 text-blue-700 h-10 placeholder:w-4/5 m-1 py-2 px-2 mx-auto rounded-xl text-center shadow-xl border border-slate-500'>{detail.bio}</div>
                <label>Phone</label>
                <div className='bg-slate-200 text-blue-700 h-10 placeholder:w-4/5 m-1 py-2 px-2 mx-auto rounded-xl text-center shadow-xl border border-slate-500'>{detail.phone_number}</div>
                <button className="w-full mx-auto mt-10 inline-flex items-center justify-center rounded-md border bg-slate-800 border-white mr-2 py-3 px-2 text-center text-base text-white tracking-wider transition hover:border-primary hover:bg-orange-500 hover:text-white lg:px-8 xl:px-10">
                <Link to='/users/myProfile/walkHistory'>Walk History</Link>
                </button>
              </form>
            </div>
          )
        })} 
    </div>
  )
}

export default MyProfile
