import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToHistoryPet, fetchAllPets } from '../features/users/petsSlice'
// import { fetchUserById } from '../features/users/usersSlice'
import PetByLocation from './PetByLocation'
import Header from './Header'
// import { fetchAllUsers } from '../features/users/usersSlice'
import Users from './Users'
import { Link, useNavigate } from 'react-router-dom'

function Pets() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const petsDisplay = useSelector((state) => {
    return state.pet
  })

  useEffect(() => {
    dispatch(fetchAllPets())
  }, [dispatch])

  const addHistory = async (userId) => {
    // await setHistoryList(historyList.push(userId))
    dispatch(addToHistoryPet(userId))
  }


  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='w-1/3 mb-12 text-center m-auto'>
        <PetByLocation />
      </div>
      <div className='w-full text-center text-lg font-bold text-slate-800'>
          <h1>Pets</h1><br/>
        </div>
      <main className='max-w-6xl mx-auto text-center mb-20 grid grid-cols-3 gap-5'>
        
        {petsDisplay.pets.map((pets, i) => {
          return (
            <div key={i} className='px-2 py-2 rounded-lg mx-auto shadow shadow-slate-400'>
              <img
                className='rounded-lg object-cover h-48 w-64'
                src={pets.img}
                alt={pets.name}
              />
              <h3 className='text-blue-500 font-semibold'>{pets.name}</h3>
              <h3 className=''>{pets.location}</h3>

              <Link to={`/pets/${pets.id}`}>
                <button className='w-20 inline-flex m-1 items-center justify-center rounded-md border border-slate-900 py-1 px-1 text-center text-slate-800  tracking-wider transition hover:border-orange-500 hover:bg-orange-500 hover:text-white lg:px-8 xl:px-10'>
                  Owner Profile
                </button>
              </Link>
              <button
                className='w-20 inline-flex items-center justify-center rounded-md border border-slate-900 py-1 px-1 text-center text-slate-800  tracking-wider transition hover:border-orange-500 hover:bg-orange-500 hover:text-white lg:px-8 xl:px-10'
                onClick={() => addHistory(pets.id)}
              >
                Add History
              </button>
              <p className={petsDisplay.history.includes(pets.id) ? '' : 'invisible'}>
                {pets.name} has been added to your history.
              </p>
              <div></div>
              <p className={petsDisplay.history.includes(pets.id) ? '' : 'invisible'}></p>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default Pets
