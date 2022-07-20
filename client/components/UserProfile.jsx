import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserById } from '../features/users/usersSlice'
import Header from './Header'

function UserProfile() {
  const params = useParams()
  const dispatch = useDispatch()
  const userId = params.id

  useEffect(() => {
    dispatch(fetchUserById(userId))
  }, [dispatch, userId])

  let user = useSelector((state) => {
    // console.log('state: ', state)
    return state.user.user
  })

  const reviews = useSelector((state) => {
    // console.log(state.review.reviews)
    return state.review.reviews
  })

  // returns an array of obj containing review for this user
  const userReview = reviews?.filter((review) => review.reviewee_id === userId)
  console.log(userReview)

  // add user review

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='flex'>
        {user.userProfile && (
          <div className='flex flex-col justify-content '>
            <h1>Walker User Profile</h1>
            <img src={user.userProfile.img} alt={user.userProfile.img} />
            <p>{user.userProfile.name}</p>
            <p>{user.userProfile.bio}</p>
            <p>Location: {user.userProfile.location}</p>
            <p>Contacts</p>
            <p>{user.userProfile.email}</p>
            <p className='mb-5'>{user.userProfile.phone_number}</p>
            {/* {user.petProfile.map((i) => {
              return (
                <div key={i}>
                  <p>{i.name}</p>
                  <p>{i.breed}</p>
                  <p>{i.age}</p>
                  <p>--------</p>
                </div>
              )
            })} */}
            {userReview &&
              userReview.map((review) => {
                return (
                  <div className='mb-5'>
                    <div>Reviews</div>
                    <p>Rating: {review.rating}</p>
                    <p>Title: {review.title}</p>
                    <p>Review: {review.review}</p>
                  </div>
                )
              })}
          </div>
        )}
      </div>
    </>
  )
}

export default UserProfile
