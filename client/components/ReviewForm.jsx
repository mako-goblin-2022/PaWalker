import React, { useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postReview } from '../apis/reviewsApi'
import { saveUser } from '../features/auth/authSlice'
import StarRate from './StarRate'
import { useNavigate, useParams } from 'react-router-dom'
import Header from './Header'

function ReviewForm() {
  const params = useParams()
  const petId = params.id
  const navigate = useNavigate()

  const [rating, setRating] = useState(0)

  const pet = useSelector((state) => {
    // console.log(state)
    return state.pet.pets
  })

  const petSelected = pet.find((pet) => pet.id === Number(petId))

  const user = useSelector((state) => {
    // console.log(state)
    return state
  })

  const [reviewForm, setReviewForm] = useState({
    auth0Id: '',
    date: '',
    title: '',
    review: '',
    rating: '',
    reviewee_id: NaN,
  })

  let dateInM = new Date()
  let currentDate =
    dateInM.getDate() + '-' + (dateInM.getMonth() + 1) + '-' + dateInM.getFullYear()

  useEffect(() => {
    if (petSelected && user) {
      setReviewForm({
        ...reviewForm,
        date: currentDate,
        rating: rating,
        auth0Id: user?.auth0Id,
        token: user?.token,
        reviewee_id: petSelected.owner_id,
      })
    }
  }, [user, pet])

  function handleInput(e) {
    const { name, value } = e.target
    setReviewForm({
      ...reviewForm,
      rating: rating,
      [name]: value,
    })
    console.log(reviewForm)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(reviewForm)
    try {
      await postReview(reviewForm)
      navigate('/users/myprofile/walkhistory')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Header />
      <div className='flex justify-center'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          {/* <label htmlFor='rating'>Rating </label> */}
          {/* <input
          id='rating'
          name='rating'
          value={reviewForm.rating}
          onChange={handleInput}
        ></input> */}

          <StarRate rating={rating} onRating={(rate) => setRating(rate)} />
          {/* <p>Rating - {rating}</p> */}
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
    </>
  )
}

export default ReviewForm
