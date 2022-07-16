import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllUsers } from '../features/users/usersSlice'
import { fetchAllPets } from '../features/users/petsSlice'

function WalkHistory() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])

  useEffect(() => {
    dispatch(fetchAllPets())
  }, [historyList])

  // console.log(history)
  const historyList = useSelector((state) => state.user)
  const historyPetList = useSelector((state) => state.pet)
  console.log(historyList)
  console.log(historyPetList)

  const findPetsFromList = () => {
    let filteredPets = historyPetList.pets.filter((pet) => {
      return historyPetList.history.indexOf(pet.id) !== -1
    })
    return filteredPets.map((i, idx) => {
      return (
        <div key={idx}>
          <img src={i.img} alt={i.img + i.name} />
          <div>{i.name}</div>
          <div>{i.size}</div>
          <p>Leave a Review</p>
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

  return <>{historyPetList.pets !== [] && findPetsFromList()}</>
}

export default WalkHistory
