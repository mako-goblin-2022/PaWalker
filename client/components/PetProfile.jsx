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

  let pet = useSelector(async (state) => {
    return state.pet.pet
  })

  useEffect(() => {
    console.log('second dispatch fired')
    dispatch(fetchUserById(`${pet.owner_id}`))
  }, [])

  let owner = useSelector((state) => {
    console.log('owner state: ', state)
    return state
  })

  // console.log(pet[0].name)

  return (
    <>
      {pet !== {} && (
        <div>
          <p>{pet.name}</p>
          <p></p>
        </div>
      )}
    </>
  )
}

export default UserProfile
