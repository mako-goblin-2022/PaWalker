import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPetsByUserId, fetchPetById } from '../features/users/petsSlice'
import { fetchUserById } from '../features/users/usersSlice'
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

  return (
    <>
      {petSelected && (
        <div>
          <p>{petSelected.name}</p>
        </div>
      )}

      {owner && (
        <div>
          <p>I am the owner: {owner?.name}</p>
        </div>
      )}
    </>
  )
}

export default UserProfile
