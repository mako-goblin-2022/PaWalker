import React, { useState, useEffect } from 'react'

import {getProducts} from '../../client/apis/apiProducts'

import { Route, Routes } from "react-router-dom"

import Products from './Products'
import Header from './Header'
import Registration  from "./Registration"
import Cart from './Cart'
import Footer from './Footer'

import Users from './Users'

import { CacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

function App() {

  CacheUser(useAuth0)

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
          <Route path='/registration' element={<Registration />} />
          <Route path='/users' element={<Users />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Products products={products} setProducts={setProductDisplay} productDisplay={productDisplay}/>} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
