import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <header className="w-full h-28 flex sticky mt-0 mb-6 justify-around items-center  bg-sky-900 text-white ">
      <div>
        <img
          className="w-16 rounded-full ml-4 "
          src={'./images/pawalker-logo.png'}
          alt="logo"
        />
        <strong className=" text-2xl drop-shadow-[0_0.5px_0.5px_rgba(250,240,250)] -tracking-tight">
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
