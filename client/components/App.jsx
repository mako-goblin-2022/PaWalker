import React, { useState, useEffect } from 'react'

import { getUsers } from '../../client/apis/usersApi'

import { Route, Routes } from 'react-router-dom'

import Users from './Users'

// import '../../client/index.css'

function App() {
  const [users, setProducts] = useState([])
  const [productDisplay, setProductDisplay] = useState([])

  useEffect(() => {
    getProducts()
      .then((productData) => {
        setProducts(productData)
        setProductDisplay(productData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <h1>Hello</h1>
      <Users />
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  )
}

export default App
