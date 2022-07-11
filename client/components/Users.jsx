import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions/usersIndex'


function UsersList (){
const usersList = useSelector((state) => state.users)
const dispatch = useDispatch()
 console.log(usersList)
useEffect(()=>{
  dispatch(fetchUsers())
}, [])

  return (
    <main className='min-h-full flex column items-center justify-center mt-10 py-12 px-4 sm:px-6 lg:px-8 bg-stone-100 drop-shadow-[0_10px_10px_rgba(0,0,0)] '>
       <h2 className='w-full mt-6 text-center text-3xl font-extrabold text-gray-900'> Users List</h2> 

      {usersList.map((user, i) => (
        
        <section className='w-3/4 h-auto bg-yellow-500 rounded-lg p-4 m-4' key={i}>
            <img 
            src={user.avatar} 
            alt={user.name} />
            <h3>
              {user.name}
            </h3>
            <h4> 
              {user.email}
            </h4>
            <h4> 
             {user.password} 
            </h4>
        </section> 
        
      ))}
    </main>
  )
}

export default UsersList;