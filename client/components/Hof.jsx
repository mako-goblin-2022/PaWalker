import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllReviews } from '../features/users/reviewsSlice'

function Hof() {
  const dispatch = useDispatch()

  const reviews = useSelector((state) => {
    console.log(state.review.reviews)
    return state.review.reviews
  })

  // useEffect(() => {
  //   if (reviews) {
  //     setReviewCopy(...reviews)
  //   }
  // }, [reviews])

  // let please = reviewCopy.sort((a, b) => a.rating)

  const getRank = () => {
    let sorted = reviews
      .map((i) => i.rating)
      .sort((a, b) => b - a)
      .slice(0, 3)
    let sortedArr = String(sorted).split(',')
    let toNumbers = sortedArr.map(Number)
    let topThree = reviews.filter((review) => toNumbers.includes(review.rating))
    console.log(topThree)
    return topThree
  }

  // get all the reviews (done)
  // add all the rating for each reviewee_id
  // sort the rating in order
  // display reviewee_id's name in descending order

  return <div>{reviews && getRank()}</div>
}

export default Hof
