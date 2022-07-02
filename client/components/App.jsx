import React, { useState, useEffect } from 'react'
// import { BrowserRouter as Router } from 'react-router-dom';
import {getProducts} from '../apiClient'

import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Products from './Products';
import Header from './Header'
import Signup  from "./Signup";
import Cart from './Cart'


function App() {

  const [products, setProducts] = useState([])

  const[productDisplay, setProductDisplay] = useState([]) 
  // product displayed

  useEffect(() => {
    getProducts()
    .then(productData => {
      setProducts(productData)
      setProductDisplay(productData)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div  >
        <Header />
      
      <Products />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='Products' element={<Products products={products} setProducts={setProductDisplay} productDisplay={productDisplay}/>} />
        </Routes>
   
        
    </div>
  )
}

export default App;
