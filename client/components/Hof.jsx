import React from 'react'
import { useSelector } from 'react-redux'

function Hof() {
  const reviews = useSelector((state) => {
    console.log(state)
    return state
  })

  return <div>Hof</div>
}

export default Hof
