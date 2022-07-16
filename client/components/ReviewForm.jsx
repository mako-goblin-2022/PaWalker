import React, { useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postReview } from '../apis/reviewsApi'
import { saveUser } from '../features/auth/authSlice'
import { FaStar } from 'react-icons/fa'
import StarRate from './StarRate'

function ReviewForm() {
  const dispatch = useDispatch()
  const [currentValue, setCurrentValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)
  const [rating, setRating] = useState(0)
  const [rating2, setRating2] = useState(0)

  const user = useSelector((state) => {
    console.log(state)
    return state
  })
  const [reviewForm, setReviewForm] = useState({
    auth0Id: '',
    date: '',
    title: '',
    review: '',
    rating: '',
  })

  let dateInM = new Date()
  let currentDate =
    dateInM.getDate() + '-' + (dateInM.getMonth() + 1) + '-' + dateInM.getFullYear()

  useEffect(() => {
    setReviewForm({
      ...reviewForm,
      date: currentDate,
      auth0Id: user?.auth0Id,
      token: user?.token,
    })
  }, [user])

  function handleInput(e) {
    const { name, value } = e.target
    setReviewForm({
      ...reviewForm,
      [name]: value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(reviewForm)
    await postReview(reviewForm)
  }

  const stars = useMemo(() => {
    return Array(5).fill(0)
  }, [])

  const handleClick = (value) => {
    setCurrentValue(value)
  }

  const handleMouseOver = (value) => {
    setHoverValue(value)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  return (
    <div>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <label htmlFor='rating'>Rating </label>
        <input
          id='rating'
          name='rating'
          value={reviewForm.rating}
          onChange={handleInput}
        ></input>
        {/* <div className='flex cursor-pointer'>
          {stars.map((_, idx) => {
            return (
              <FaStar
                key={idx}
                className={
                  (hoverValue || currentValue) > idx
                    ? 'text-orange-400 '
                    : 'text-gray-300'
                }
                onClick={() => handleClick(idx + 1)}
                onMouseOver={() => handleMouseOver(idx + 1)}
                onMouseLeave={handleMouseLeave}
              />
            )
          })}
        </div> */}
        <StarRate rating={rating} onRating={(rate) => setRating(rate)} />
        <p>Rating - {rating}</p>
        <StarRate rating={rating2} onRating={(rate) => setRating2(rate)} />
        <p>Rating - {rating2}</p>
        <label htmlFor='title'>Title: </label>
        <input
          id='title'
          name='title'
          value={reviewForm.name}
          placeholder='Enter Review Title'
          onChange={handleInput}
        ></input>
        <label htmlFor='review'>review: </label>
        <textarea
          className='border p-2 '
          id='review'
          name='review'
          value={reviewForm.review}
          placeholder='Please Leave a Feedback'
          onChange={handleInput}
        />
        <label htmlFor='date'>Date: </label>
        <input
          id='date'
          name='date'
          value={reviewForm.date}
          onChange={handleInput}
        ></input>
        <button type='submit'>Leave a Review</button>
      </form>
    </div>
  )
}

export default ReviewForm
