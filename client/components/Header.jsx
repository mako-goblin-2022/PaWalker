import React from 'react'
// import {Link} from 'react-router-dom';
import Navbar from './NavbarFilter'

function Header() {
  return (
    <header className="w-full h-24 flex sticky mt-0 mb-6 justify-around items-center  bg-teal-600 text-slate-50 ">
      <div>
        <img
          className="w-14 rounded-full drop-shadow-[0_1px_1px_rgba(0,0,0)]"
          src={'./images/paWalker.png'}
          alt="logo"
        />
        <strong className="text-orange-400 text-xl drop-shadow-[0_0.5px_0.5px_rgba(250,240,250)] tracking-wide">
          PaWalker
        </strong>
      </div>

      <div className="text-right ">
        <Navbar />
      </div>
    </header>
  )
}

export default Header
