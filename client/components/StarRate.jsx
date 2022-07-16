import React, { useState, useMemo } from 'react'
import { FaStar } from 'react-icons/fa'

function StarRate({ count, rating, color, onRating }) {
  const [hoverRating, setHoverRating] = useState(0)

  const getColour = (index) => {
    if (hoverRating >= index) {
      return color.filled
    } else if (!hoverRating && rating >= index) {
      return color.filled
    }

    return color.unfilled
  }

  const starRating = useMemo(() => {
    return Array(5)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <FaStar
          key={idx}
          className='cursor-pointer '
          // style={{ color: getColour(idx) }}
          onClick={() => onRating(idx)}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ))
  }, [rating, hoverRating])

  return <div>{starRating}</div>
}

export default StarRate
