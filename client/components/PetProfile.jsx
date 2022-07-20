import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPetsByUserId, fetchPetById } from '../features/users/petsSlice'
import { fetchUserById } from '../features/users/usersSlice'
import Header from './Header'

function UserProfile() {
  const params = useParams()
  const dispatch = useDispatch()
  const petId = params.id
  console.log(petId)

  const pet = useSelector((state) => {
    console.log(state.pet.pets)
    return state.pet.pets
  })

  const allReviews = useSelector((state) => {
    return state.review.reviews
  })

  const petSelected = pet.find((pet) => pet.id === Number(petId))
  console.log('I am a pet profile: ', petSelected)

  const petReview = allReviews.find((review) => review.reviewee_id === petId)
  console.log('I am a pet review: ', petReview)

  useEffect(() => {
    console.log(pet.owner_id)
    if (petSelected) {
      dispatch(fetchUserById(petSelected.owner_id))
    }
  }, [pet])

  let owner = useSelector((state) => {
    console.log('owner detail: ', state.user.user)
    return state.user.user.userProfile
  })

  // add pet review

  return (
    <>
      <Header />
      <div className='flex flex-col justify-around'>
        {petSelected && (
          <div className=''>
            <img
              className='rounded-lg object-cover h-48 w-64'
              src={petSelected.img}
              alt={petSelected.name}
            />
            <p>{petSelected.name}</p>
            <p>{petSelected.breed}</p>
            <p>{petSelected.gender}</p>
            <p>Location: {petSelected.location}</p>
            <p>size: {petSelected.size}</p>
          </div>
        )}

        {owner && (
          <div className='mt-10 mb-10'>
            <p>The Owner Detail </p>
            <p>{owner?.name}</p>
            <p>{owner?.email}</p>
            <p>{owner?.phone_number}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default UserProfile
