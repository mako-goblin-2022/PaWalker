import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Products from './Products';
import Header from './Header'

import productItems from '../../server/db/Data'



function App() {
  return (
    <div  >
        <Header />
     
      <Products />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Products' element={<Products productItems={productItems}/>} />
        </Routes>
   
        
    </div>
  )
}

export default App;
