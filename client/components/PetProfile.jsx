import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPetsByUserId, fetchPetById } from '../features/users/petsSlice'
import { fetchUserById } from '../features/users/usersSlice'
function UserProfile() {
  const params = useParams()
  const dispatch = useDispatch()
  const petId = params.id

  const pet = useSelector((state) => {
    console.log(state)
    return state.pet.pets
  })

  const petSelected = pet.find((pet) => pet.id === Number(petId))

  useEffect(() => {
    console.log(pet.owner_id)
    if (petSelected) {
      dispatch(fetchUserById(petSelected.owner_id))
    }
  }, [pet])

  let owner = useSelector((state) => {
    console.log('owner state: ', state.user.user)
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
