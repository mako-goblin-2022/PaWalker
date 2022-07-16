import React from "react";
// import {Link} from 'react-router-dom';
import Navbar from "./NavbarFilter";



function Header () {
  return (
    <header className="w-5/5 h-20 flex sticky mt-0 mb-6 m-auto p-3 justify-around items-center overflow-hidden bg-teal-600 text-slate-50 shadow-lg shadow-orange-500/10">
      
        <div>
          <Navbar />
        </div>
    </header>
  )
}

export default Header;



