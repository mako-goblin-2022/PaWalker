import React, { useState } from 'react'

function AddProduct() {
  const [newProduct, setNewProduct] = useState('')

  function handleChange(evt) {
    setNewProduct(evt.target.value)
  }

  function saveProduct(evt) {
    evt.preventDefault()
    console.log(`You want to add a ${newProduct} product`)
    setNewProduct('')
  }

  return (
    <form onSubmit={saveProduct}>
      <label htmlFor="ProductName">Product name: </label>
      <input type="text" value={newProduct} onChange={handleChange} />
      <button type="submit"> Save </button>
    </form>
  )
}

export default AddProduct