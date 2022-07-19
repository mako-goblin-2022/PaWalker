import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
<<<<<<< HEAD
import { fetchAllWalkers } from '../features/users/walkersSlice'
import '../../client/index.css'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { User } from '@auth0/auth0-react'

const pet = [
  {
    id: 1,
    name: 'Dog walker contact list',
    avatar: 'https://i.pinimg.com/564x/49/8e/67/498e67ea118f86a23fd4e436033f5603.jpg',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Walkers() {
  const [selected, setSelected] = useState(pet[0])
||||||| 1288a23
import { fetchAllWalkers } from '../features/users/walkersSlice'
import '../../client/index.css'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'


const pet = [
  {
    id: 1,
    name: 'Dog walker contact list',
    avatar:
    
      'https://i.pinimg.com/564x/49/8e/67/498e67ea118f86a23fd4e436033f5603.jpg',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Walkers() {
  const [selected, setSelected] = useState(pet[0])
=======
import { fetchAllUsers } from '../features/users/usersSlice'

function Walkers() {
>>>>>>> all-users
  const walkersDisplay = useSelector((state) => {
    // console.log(state)
    return state.user.users
  })
<<<<<<< HEAD

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllWalkers())
  }, [dispatch])

  return (
    <main className='w-4/5 m-auto'>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className='block mt-20 text-2xl font-bold text-gray-700'>
              Walkers
            </Listbox.Label>
            <div className='mt-1 h-2/4 relative'>
              <Listbox.Button className='relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-300 sm:text-sm'>
                <span className='flex items-center'>
                  <img
                    src={selected.avatar}
                    alt=''
                    className='flex-shrink-0 h-28 w-28 rounded-full'
                  />
                  <span className='ml-3 block truncate'>{selected.name}</span>
                </span>
                <span className='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                  <SelectorIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                  {walkersDisplay.map((walker) => (
                    <Listbox.Option
                      key={walker.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-orange-300' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-3 pr-9'
                        )
                      }
                      value={walker}
                    >
                      {({ selected, active }) => (
                        <section className='h-22 mb-3'>
                          <div className='flex items-center'>
                            <img
                              src={walker.img}
                              alt=''
                              className='flex-shrink-0 h-20 w-20 rounded-full'
                            />
                            <h3
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'ml-3 block truncate'
                              )}
                            >
                              <span className='m-2 text-slate-900'>
                                Heya, I am <strong>{walker.name}</strong>,<br />
                                location: &nbsp; <em>{walker.location}</em>
                                &nbsp;&nbsp;&nbsp;&nbsp; rank: &nbsp;{' '}
                                <em>{walker.rank}</em>
                              </span>
                            </h3>
                            {/* <button className='border border-black' onClick={() => addHistory(walker.id)}>
                              Add to History
                            </button> */}
                          </div>
||||||| 1288a23
    
      const dispatch = useDispatch()
    
    
      useEffect(() => {
        dispatch(fetchAllWalkers())
      }, [dispatch])
  
 

  return (
    <main className='w-4/5 m-auto'>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block mt-20 text-2xl font-bold text-gray-700">Walkers</Listbox.Label>
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
                  {walkersDisplay.map((walker) => (
                    <Listbox.Option
                      key={walker.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-orange-300' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-3 pr-9'
                        )
                      }
                      value={walker}
                    >
                      {({ selected, active }) => (
                        <section className="h-22 mb-3">

                          <div className="flex items-center">
                            <img src={walker.img} alt="" className="flex-shrink-0 h-20 w-20 rounded-full" />
                            <h3
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              <span className='m-2 text-slate-900'>Heya, I am <strong>{walker.name}</strong>,<br/>
                               location:  &nbsp; <em>{walker.location}</em>&nbsp;&nbsp;&nbsp;&nbsp; rank: &nbsp; <em>{walker.rank}</em></span>
                            </h3>
                            {/* <button className='border border-black' onClick={() => addHistory(walker.id)}>
                              Add to History
                            </button> */}
        
                          </div>
=======

  const dispatch = useDispatch()
>>>>>>> all-users

<<<<<<< HEAD
                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-orange-400',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className='h-5 w-5' aria-hidden='true' />
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
||||||| 1288a23
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
=======
  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

   let walker = walkersDisplay.filter(user => user.walker === true)
 console.log(walker)
 
  return (
    <main className="max-w-3xl mx-auto text-center mb-20 grid grid-cols-2 gap-4">
      {walkersDisplay.map((walkers, i) => {
        // if (walkers.walker === true)
        
        return (
          <div>
            <div key={i} className="px-2 py-2 rounded-lg mx-auto">
            <img
              className="rounded-lg object-cover h-48 w-64"
              src={walkers.img}
              alt={walkers.name}
            />

            <h3 className="text-sky-600 font-semibold">{walkers.name}</h3>
            <h3 className="">{walkers.location}</h3>

        
          </div>
          
          </div>
          
        )
      })}
>>>>>>> all-users
    </main>
  )
<<<<<<< HEAD
}
||||||| 1288a23
}
=======
}

export default Walkers
>>>>>>> all-users
