
import React from "react"
import {Link} from 'react-router-dom'

const NavbarFilter = () => {
  return (
    <nav className="flex space-x-8 h-32 items-center">
      <ul className="">
          <li>
          <img className="w-14 rounded-full " 
              src={'./images/paWalker.png'} 
              alt='logo'/><strong>PaWalker</strong>
          </li>
        </ul>
      <div className="space-x-6 items-center font-bold text-base uppercase tracking-wide">
        <ul className="inline-block hover:text-orange-500 hover:translate-y-px">
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
        </ul>
        <ul className="inline-block hover:text-orange-500 hover:translate-y-px">
          <li>
            <Link to='/pets'>
              Pets
            </Link>
          </li>
        </ul>
        <ul className="inline-block hover:text-orange-500 hover:translate-y-px">
          <li>
            <Link to='/users'>
              Owners
            </Link>
          </li>
        </ul>
        <ul className="inline-block hover:text-orange-500 hover:translate-y-px">
          <li>
            <Link to='/walkers'>
              Walkers
            </Link>
          </li>
        </ul>
        <ul className="inline-block hover:text-orange-500 hover:translate-y-px">
          <li>
            <Link to='/login'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarFilter;