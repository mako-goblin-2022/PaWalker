import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
        </ul>
        
      </div>
      <div>
        
      </div>
    </header>
  )
}

export default Navbar;