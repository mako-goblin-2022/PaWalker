import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPets } from '../features/users/petsSlice'



function Pets() {
  const petsDisplay = useSelector((state) => {
    // console.log(state)
    return state.pet.pets
  })

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchAllPets())
  }, [])

  return (
    <main className="">
      {petsDisplay.map((pets, i) => {
        // console.log(pets)
        return (
          <section key={i} className="">
            <div>
              <img className="" 
              src={pets.img} 
              alt={pets.name} />
            </div>
            <div>
              <h3 className="">{pets.name}</h3>
            </div>
            <div>
              <h3 className="">{pets.location}</h3>
            </div>
          </section>
        )})}
       
    </main>
  )
}

export default Pets
