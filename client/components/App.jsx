import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Products from './Products';
import Header from './Header'
import Signup  from "./Signup";
import productItems from '../../server/db/Data'
import Cart from './Cart'


function App() {
  return (
    <div  >
        <Header />
      
      <Products />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Products' element={<Products productItems={productItems}/>} />
        </Routes>
   
        
    </div>
  )
}

export default App;
