/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPets } from '../features/users/petsSlice'



const people = [
  {
    id: 1,
    name: 'Locations',
    avatar:'https://cdn-icons-png.flaticon.com/512/6644/6644401.png',   
  },
  {
    id: 2,
    name: 'CBD',
    avatar:'https://cdn-icons-png.flaticon.com/512/6644/6644401.png',   
  },
  {
    id: 3,
    name: 'North',
    avatar:'https://cdn-icons-png.flaticon.com/512/6644/6644401.png',   
  },
  {
    id: 4,
    name: 'South',
    avatar:'https://cdn-icons-png.flaticon.com/512/6644/6644401.png',   
  },
  {
    id: 5,
    name: 'West',
    avatar:'https://cdn-icons-png.flaticon.com/512/6644/6644401.png',   
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PetByLocation() {
  const [selected, setSelected] = useState(people[0])

  const dispatch = useDispatch()
const petsDisplay = useSelector((state) => {
  // console.log(state)
  return state.pet
})



useEffect(() => {
  dispatch(fetchAllPets())
}, [dispatch])

  return (
    <div>
      
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700"></Listbox.Label>
            <div className="mt-1 relative ">
              <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span className="flex items-center">
                  
                  <img src={selected.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
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
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-indigo-600' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-3 pr-9'
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center ">
                            <img src={person.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {person.name}
                            </span>
                          </div>
                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  )
}
