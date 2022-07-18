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

  // my attempt
  // const getRank = () => {
  //   let sorted = reviews
  //     .map((i) => i.rating)
  //     .sort((a, b) => b - a)
  //     .slice(0, 3)
  //   let sortedArr = String(sorted).split(',')
  //   let toNumbers = sortedArr.map(Number)
  //   let topThree = reviews.filter((review) => toNumbers.includes(review.rating))
  //   console.log(topThree)
  //   return topThree
  // }

  /// arr of arr
  // const getRank = () => {
  //   let ans = Array.from(
  //     reviews.reduce((a, { reviewee_id, rating }) => {
  //       return a.set(reviewee_id, (a.get(reviewee_id) || 0) + rating)
  //     }, new Map())
  //   )
  //   console.log(ans.sort((a, b) => b[1] - a[1]))
  //   return ans.sort((a, b) => b - a)[0]
  // }

  //// best so far
  // const getRank = () => {
  //   let sums = {}
  //   for (let i = 0; i < reviews.length; i++) {
  //     let obj = reviews[i]
  //     sums[obj.reviewee_id] =
  //       sums[obj.reviewee_id] === undefined ? 0 : sums[obj.reviewee_id]

  //     sums[obj.reviewee_id] += obj.rating
  //   }
  //   console.log(sums)
  //   let sortedArr
  //   sortedArr = Object.keys(sums)
  //     .sort((a, b) => {
  //       return sums[b] - sums[a]
  //     })
  //     .map((key) => ({ [key]: sums[key] }))
  //   console.log(sortedArr)
  //   // pulling out the first obj
  //   return sortedArr
  // }

  const getRank = () => {
    let result = Object.values(
      reviews.reduce((c, { reviewee_id, rating }) => {
        c[reviewee_id] = c[reviewee_id] || { reviewee_id, rating: 0 }
        c[reviewee_id].rating += rating
        return c
      }, {})
    )

    let sorted = result.sort((a, b) => b.rating - a.rating)
    console.log('the whole list: ', sorted)
    console.log('the first element: ', sorted[0])
    console.log('first key within the first element: ', sorted[0]?.reviewee_id)

    return sorted
  }
  console.log(getRank()[0]?.reviewee_id)

  const topRev = getRank()

  // get all the reviews (done)
  // add all the rating for each reviewee_id
  // sort the rating in order
  // display reviewee_id's name in descending order

  return <div>{reviews && topRev[0]?.reviewee_id}</div>
}

export default Hof
