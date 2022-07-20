import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' flex items-center p-3 font-semibold  uppercase rounded-md border border-orange-500 mr-2 py-2 px-5 text-center text-base text-orange-500 tracking-wider transition hover:border-primary lg:px-8 xl:px-10'>
     
      <ul className=' flex flex-wrap '>
        <li className='p-2  hover:text-white hover:translate-y-px shadow-2xl'>
          <Link to='/'>Home</Link>
        </li>

        <li className='p-2  hover:text-white hover:translate-y-px'>
          <Link to='/pets'>Pets</Link>
        </li>
        {/* <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
            <Link to='/users'>
              Owners
            </Link>
          </li> */}

        <li className='p-2  hover:text-white hover:translate-y-px'>
          <Link to='/walkers'>Walkers</Link>
        </li>
        <li className='p-2  hover:text-white hover:translate-y-px'>
          <Link to={'/users/myProfile'}>My Profile</Link>
        </li>
        {/* <li className='p-2  hover:text-orange-500 hover:translate-y-px'>
            <Link to={'/users/myProfile/walkHistory'}>
              Walk History
            </Link>
          </li> */}
        <li className='p-2  hover:text-white hover:translate-y-px'>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
