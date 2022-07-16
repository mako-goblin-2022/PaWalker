import React, { useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postReview } from '../apis/reviewsApi'
import { saveUser } from '../features/auth/authSlice'
import StarRate from './StarRate'

function ReviewForm() {
  const dispatch = useDispatch()
  const [rating, setRating] = useState(0)

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
      rating: rating,
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

        <StarRate rating={rating} onRating={(rate) => setRating(rate)} />
        <p>Rating - {rating}</p>
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
        <button type='submit'>Submit a Review</button>
      </form>
    </div>
  )
}

export default ReviewForm
