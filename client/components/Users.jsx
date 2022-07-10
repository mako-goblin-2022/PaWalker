import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions/usersIndex'


function UsersList (){
const usersList = useSelector((state) => state.users)
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchUsers())
}, [dispatch])

  return (
    <main className=''>
       <h2> Users List</h2> 

      {usersList.map((user, i) => (
        
        <section className='' key={i}>
            <img 
            src={`/images/${user.avatar}`} 
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