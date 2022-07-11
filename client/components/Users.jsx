import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions/usersIndex'


function UsersList (){
const usersList = useSelector((state) => state.users)
const dispatch = useDispatch()
 console.log(usersList)

  useEffect(()=>{
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <main className='w-full min-h-full flex-col items-center justify-center mt-10 py-12 px-4 sm:px-6 lg:px-8 bg-stone-100 drop-shadow-[0_10px_10px_rgba(0,0,0)] '>
       <h2 className='w-full mt-6 text-center text-3xl font-extrabold text-gray-900'> Users List</h2> 
      <div className='items-center justify-center mt-10 py-12 px-4 sm:px-6 lg:px-8 bg-stone-100 drop-shadow-[0_10px_10px_rgba(0,0,0)]'>
  
        {usersList.map((user, i) => (
  
          <section className='w-1/2 min-h-50 h-auto bg-stone-300 bg-stone-100 drop-shadow-[0_10px_10px_rgba(0,0,0)]  rounded-lg p-4 m-4' key={i}>
         
              <h3 className='font-bold'>
                {user.name}
              </h3>
              <h4>
                Email: {user.email}
              </h4>
              <h4>
               Password: {user.password}
              </h4>
          </section>
        ))}
      </div>
    </main>
  )
}

export default UsersList;