import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPetsByUserId, fetchPetById } from '../features/users/petsSlice'
import { fetchUserById } from '../features/users/usersSlice'
function UserProfile() {
  const params = useParams()
  const dispatch = useDispatch()
  const petId = params.id

  useEffect(() => {
    console.log('first dispatch fired')
    dispatch(fetchPetById(1))
  }, [])

  let pet = useSelector((state) => {
    console.log(state)
    return state.pet.pet
  })

  useEffect(() => {
    console.log(pet.owner_id)
    dispatch(fetchUserById(`${pet.owner_id}`))
  }, [pet])

  let owner = useSelector((state) => {
    console.log('owner state: ', state)
    return state.user.user
  })

  // how to access 'owner' after getting the state?

  return (
    <>
      {pet.name && (
        <div>
          <p>{pet.name}</p>
        </div>
      )}

      {/* {owner.userProfile.name}
      {owner.userProfile.name && (
        <div>
          <p>I am the owner: {owner.userProfile.name}</p>
        </div>
      )} */}
    </>
  )
}

export default UserProfile
