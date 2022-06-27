import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Products from './components/Products';
import productItems from '../server/db/Data'

function App() {
  return (
    <div >
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products productItems={productItems}/>} />
        </Routes>
    </div>
  )
}

export default App;
