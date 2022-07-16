import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPets } from '../features/users/petsSlice'
import { addToHistoryPet } from '../features/users/petsSlice'

function Pets() {
  const [historyList, setHistoryList] = useState([])

  const petsDisplay = useSelector((state) => {
    console.log(state)
    return state.pet.pets
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllPets())
  }, [])

  const addHistory = async (userId) => {
    // await setHistoryList(historyList.push(userId))
    dispatch(addToHistoryPet(userId))
  }

  return (
    <main className=''>
      <Link to={'/users/myProfile'}>My Profile</Link>

      {petsDisplay.map((pets, i) => {
        console.log(pets)
        return (
          <section key={i} className=''>
            <div>
              <img className='' src={pets.img} alt={pets.name} />
            </div>
            <div>
              <h3 className=''>{pets.name}</h3>
            </div>
            <div>
              <h3 className=''>{pets.location}</h3>
            </div>
            <button className='border border-black' onClick={() => addHistory(pets.id)}>
              Add to History
            </button>
          </section>
        )
      })}
    </main>
  )
}

export default Pets
