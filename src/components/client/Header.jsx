import React from "react";
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
const Header = () => {
  return (
    <header className="w-4/5 h-min-4/5 flex sticky mt-0 m-auto p-3 justify-between items-center overflow-hidden bg-stone-800 text-slate-50 shadow-lg shadow-orange-500/10">
      <div className="inline-block font-bold">
        <Link  to='/'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-0.5 text-orange-500 inline-block mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg> 
          eShop
        </Link>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header;