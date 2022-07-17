import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPets } from '../features/users/petsSlice'



// function Pets() {
//   const petsDisplay = useSelector((state) => {
//     // console.log(state)
//     return state.pet.pets
//   })

//   const dispatch = useDispatch()


//   useEffect(() => {
//     dispatch(fetchAllPets())
//   }, [dispatch])

//   return (
//     <main className="max-w-lg bg-orange-400 m-auto flex flex-col rounded-3xl drop-shadow-[0_5px_5px_rgba(0,80,0)]">
//       {petsDisplay.map((pets, i) => {
//         // console.log(pets)
//         return (
//           <option value="">
//             <section key={i} className="max-w-lg h-24 bg-slate-100 flex m-3 rounded-xl drop-shadow-[0_5px_5px_rgba(0,80,0)]">
//                 <img className="w-24 p-2 rounded-xl"
//                 src={pets.img}
//                 alt={pets.name}
//                  />
//                 <div>
//                   <h3 className="m-4">Pet: <strong>{pets.name}</strong></h3>
//                   <h3 className="m-4">Owner: <strong>{pets.owner_id}</strong></h3>
//                 </div>
//             </section>
//           </option>
//         )})}
       
//     </main>
//   )
// }

// export default Pets


/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const pet = [
  {
    id: 1,
    name: 'Heya, I am Scooby',
    avatar:
    
      'https://i.pinimg.com/564x/60/fe/2c/60fe2cbd88771a82dc3c4c4cafb23fde.jpg',
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pets() {
  const [selected, setSelected] = useState(pet[0])
  const petsDisplay = useSelector((state) => {
        // console.log(state)
        return state.pet.pets
      })
    
      const dispatch = useDispatch()
    
    
      useEffect(() => {
        dispatch(fetchAllPets())
      }, [dispatch])

  return (
    <main className='w-4/5 m-auto'>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block mt-20 text-2xl font-bold text-gray-700">Pet list</Listbox.Label>
            <div className="mt-1 h-2/4 relative">
              <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-300 sm:text-sm">
                <span className="flex items-center">
                  <img src={selected.avatar} alt="" className="flex-shrink-0 h-28 w-28 rounded-full" />
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {petsDisplay.map((pet) => (
                    <Listbox.Option
                      key={pet.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-orange-300' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-3 pr-9'
                        )
                      }
                      value={pet}
                    >
                      {({ selected, active }) => (
                        <section className="h-22 mb-3">
                          <div className="flex items-center">
                            <img src={pet.img} alt="" className="flex-shrink-0 h-20 w-20 rounded-full" />
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              <span className='m-2 text-slate-900'>Heya, I am {pet.name}, and
                              my owner is {pet.owner_id}</span>
                            </span>
                          </div>
                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-orange-400',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </section>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </main>
  )
}
