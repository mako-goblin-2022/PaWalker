import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {saveProduct} from '../actions'

function Product(props) {
  const product = props.product
  const [newProductName, setProduct] = useState(product.name)
  const dispatch = useDispatch()

  function deleteProduct() {
    console.log(`You want to delete the ${product.name} (id ${product.id})`)
  }

  function handleChange(e) {
    setProduct(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(saveProduct({...product, name: newProductName}))
    // setFruitName(fruit.name)
  }

  return (
    <li>
      <p>
        {product.name}
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} value={newProductName} />
          <input type='submit' value='Update' />
        </form>
        <button onClick={deleteProduct}>Delete</button>
      </p>
    </li>
  )
}

export default Product

