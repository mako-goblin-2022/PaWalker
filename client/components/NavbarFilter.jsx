import React from 'react'
import { Link } from 'react-router-dom'

const NavbarFilter = () => {
  return (
<<<<<<< HEAD
    <nav className=' flex flex-wrap  p-3 font-semibold text-sm uppercase tracking-wide'>
      <ul className=' flex flex-wrap '>
        <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
          <Link to='/'>Home</Link>
        </li>

        <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
          <Link to='/pets'>Pets</Link>
        </li>

        {/* <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
||||||| 1288a23
 
      <nav className=" flex flex-wrap  p-3 font-semibold text-sm uppercase tracking-wide">
        <ul className=" flex flex-wrap ">
          <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
            <Link to='/'>
              Home
            </Link>
          </li>
        
          <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
            <Link to='/pets'>
              Pets
            </Link>
          </li>
       
          {/* <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
=======
 
      <nav className=" flex flex-wrap  p-3 font-semibold text-slate-50 text-sm uppercase tracking-wide">
        <ul className=" flex flex-wrap ">
          <li className='p-2  hover:text-orange-500 hover:translate-y-px shadow-2xl'>
            <Link to='/'>
              Home
            </Link>
          </li>
        
          <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
            <Link to='/pets'>
              Pets
            </Link>
          </li>
       
          {/* <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
>>>>>>> all-users
            <Link to='/users'>
              Owners
            </Link>
          </li> */}
<<<<<<< HEAD

        <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
          <Link to='/walkers'>Walkers</Link>
        </li>
        <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
          <Link to={'/users/myProfile'}>My Profile</Link>
        </li>
        <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
          <Link to={'/users/myProfile/walkHistory'}>Walk History</Link>
        </li>
        <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
          <Link to={'/hof'}>Hall Of Fame</Link>
        </li>
        <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
||||||| 1288a23
       
          <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
            <Link to='/walkers'>
              Walkers
            </Link>
          </li>
          <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
            <Link to={'/users/myProfile'}>
              My Profile
            </Link>
          </li>
          <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
            <Link to={'/users/myProfile/walkHistory'}>
              Walk History
            </Link>
          </li>
          <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
            <Link to='/login'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
   
=======
       
          <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
            <Link to='/walkers'>
              Walkers
            </Link>
          </li>
          <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
            <Link to={'/users/myProfile'}>
              My Profile
            </Link>
          </li>
          {/* <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
            <Link to={'/users/myProfile/walkHistory'}>
              Walk History
            </Link>
          </li> */}
          <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
            <Link to='/login'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
   
>>>>>>> all-users
  )
}

export default NavbarFilter
