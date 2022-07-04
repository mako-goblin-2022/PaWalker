import React, { useState, useEffect } from 'react'

import {getProducts} from '../apiClient'

import { Route, Routes } from "react-router-dom";

import Products from './Products';
import Header from './Header'
import Signup  from "./Signup";
import Cart from './Cart'
import Footer from './Footer';


function App() {

  const [products, setProducts] = useState([])
  const[productDisplay, setProductDisplay] = useState([]) 


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
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Products' element={<Products products={products} setProducts={setProductDisplay} productDisplay={productDisplay}/>} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
