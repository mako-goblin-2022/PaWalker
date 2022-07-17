import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllUsers } from '../features/users/usersSlice'
import { fetchAllPets } from '../features/users/petsSlice'
import { Link } from 'react-router-dom'

function WalkHistory() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])

  useEffect(() => {
    dispatch(fetchAllPets())
  }, [allUserList])

  // console.log(history)
  const allUserList = useSelector((state) => state.user)
  const allPetList = useSelector((state) => state.pet)
  // console.log(allUserList)
  // console.log(allPetList)

  const findPetsFromList = () => {
    let historyPets = allPetList.pets.filter((pet) => {
      return allPetList.history.indexOf(pet.id) !== -1
    })
    return historyPets.map((pet, idx) => {
      console.log(pet)
      return (
        <div key={idx}>
          <img src={'/images/pets/sample.jpg'} alt={pet.img + pet.name} />
          <div>{pet.name}</div>
          <div>{pet.size}</div>
          <Link to={`/pets/${pet.id}/review`}>
            <p>Leave a Review</p>
          </Link>
        </div>
      )
    })
  }

  // useEffect(() => {
  //   setInitialUser(history)
  // }, [])

  // useEffect(() => {
  //   findUserFromList('2')
  // }, [])

  return <>{allPetList.pets !== [] && findPetsFromList()}</>
}

export default WalkHistory
