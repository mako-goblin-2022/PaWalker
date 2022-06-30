import React from "react";
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";



function Header () {
  return (
    <header className="w-5/5 h-5/6 flex sticky mt-0 mb-6 m-auto p-3 justify-around items-center overflow-hidden bg-stone-600 text-slate-50 shadow-lg shadow-orange-500/10">
        <div className="inline-block font-bold text-orange-500 text-2xl tracking-wide">
          <Link  to='/'>
             e-Shop
          </Link>
        </div>
        <div>
          <Navbar />
        </div>
        
          
       
    </header>
  )
}

export default Header;