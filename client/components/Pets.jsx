
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToHistoryPet, fetchAllPets } from '../features/users/petsSlice'
import { fetchAllUsers } from '../features/users/usersSlice'



function Pets() {
  const dispatch = useDispatch()
  const petsDisplay = useSelector((state) => {
    // console.log(state)
    return state.pet
  })

  useEffect(() => {
    dispatch(fetchAllPets())
  }, [])

  const usersDisplay = useSelector((state) => {
    // console.log(state)
    return state.user.users
  })

  

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])
  
  const addHistory = async (userId) => {
    // await setHistoryList(historyList.push(userId))
    dispatch(addToHistoryPet(userId))
  }

  return (
    <main className='flex flex-col m-auto   '>
      {petsDisplay.pets.map((pets, i) => {
        return (
        
          <section key={i} className=" overflow-hidden text-gray-700 ">
          <div className=" container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className=" flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap w-1/6">
                <div className="w-full p-1 md:p-2">
                  <img className="block object-cover object-center w-full h-full rounded-lg" src={pets.img} alt={pets.name} />
                </div>
              </div>
              <div>
                <h3 className='text-sky-600 font-semibold m-3'>{pets.name}</h3>
              </div>
              <div>
      {usersDisplay.map((user, index) => {
        // console.log(user)
        return (
              <div key={index}>
                <h3 className=''>{user.location}</h3>
              </div>
        )})}
              </div>
              <button className='w-40 cursor-pointer mb-5 m-14 uppercase h-9 bg-yellow-600 rounded-3xl text-slate-50 font-bold  drop-shadow-[0_5px_5px_rgba(0,0,0)] hover:bg-orange-500 hover:text-slate-900 hover:translate-y-px' onClick={() => addHistory(pets.id)}>
                      Add to History
              </button>
                <p className={petsDisplay.history.includes(pets.id) ? '' : 'invisible'}>
                      {pets.name} has been added to your history.
                </p>
            </div>
          </div>
        </section>
          
       
        )
      })}
    </main>
  )
}

export default Pets




