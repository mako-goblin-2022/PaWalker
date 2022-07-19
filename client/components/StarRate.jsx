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
    return Array(count)
      .fill(0)
      .map((_, idx) => idx + 1)
      .map((idx) => (
        <FaStar
          key={idx}
          className='cursor-pointer flex'
          // style={{ color: getColour(idx) }}
          onClick={() => onRating(idx)}
          style={{ color: getColour(idx) }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ))
  }, [count, rating, hoverRating])

  return <div className='flex'>{starRating}</div>
}

StarRate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: '#f5eb3b',
    unfilled: '#DCDCDC',
  },
}

export default StarRate
