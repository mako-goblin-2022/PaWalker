import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postReview } from '../apis/reviewsApi'
import { saveUser } from '../features/auth/authSlice'

function ReviewForm() {
  const dispatch = useDispatch()
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

  function handleInput(evt) {
    setReviewForm({
      ...reviewForm,
      [evt.target.name]: evt.target.value,
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
        <label htmlFor='title'>Title: </label>
        <input
          id='title'
          name='title'
          value={reviewForm.name}
          onChange={handleInput}
        ></input>
        <label htmlFor='review'>review: </label>
        <input
          id='review'
          name='review'
          value={reviewForm.review}
          onChange={handleInput}
        ></input>
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
