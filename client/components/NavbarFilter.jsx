import React from 'react'
import { Link } from 'react-router-dom'

const NavbarFilter = () => {
  return (
    <nav className=" flex flex-wrap  p-3 font-semibold text-sm uppercase tracking-wide">
      <ul className=" flex flex-wrap ">
        <li className="p-2  hover:text-orange-500 hover:translate-y-px">
          <Link to="/">Home</Link>
        </li>

        <li className="p-2  hover:text-orange-500 hover:translate-y-px">
          <Link to="/pets">Pets</Link>
        </li>

        <li className="p-2  hover:text-orange-500 hover:translate-y-px">
          <Link to="/users">Owners</Link>
        </li>

        <li className="p-2  hover:text-orange-500 hover:translate-y-px">
          <Link to="/walkers">Walkers</Link>
        </li>

        <li className="p-2  hover:text-orange-500 hover:translate-y-px">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarFilter
