import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPetsByUserId, fetchPetById } from '../features/users/petsSlice'
import { fetchUserById } from '../features/users/usersSlice'
function UserProfile() {
  const params = useParams()
  const dispatch = useDispatch()
  const userId = params.id

  useEffect(() => {
    dispatch(fetchPetById(1))
  }, [])

  let pet = useSelector((state) => {
    console.log('pet state: ', state.pet.pet)
    return state.pet.pet
  })

  useEffect(() => {
    dispatch(fetchUserById(`${pet.owner_id}`))
  }, [pet])

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
