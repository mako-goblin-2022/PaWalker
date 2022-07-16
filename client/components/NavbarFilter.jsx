import { logDOM } from "@testing-library/react";
import React from "react";
import {Link} from 'react-router-dom';

const NavbarFilter = () => {
  return (
    <nav className="flex space-x-8">
      <ul className="">
          <li>
          <img className="w-14 rounded-full " 
              src={'./images/paWalker.png'} 
              />
          </li>
        </ul>
      <div className="space-x-8 font-bold text-sm uppercase tracking-wide">
        <ul className="inline-block hover:text-orange-300 hover:translate-y-px">
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