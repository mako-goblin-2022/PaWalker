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

  // const getRank = () => {
  //   let ans = []
  //   reviews.forEach(function (item) {
  //     if (ans.hasOwnProperty(item.reviewee_id)) {
  //       ans[item.reviewee_id] = ans[item.reviewee_id] + item.rating
  //     } else {
  //       ans[item.reviewee_id] = item.rating
  //     }
  //   })
  //   console.log(ans)
  //   return ans[2]
  // }

  // const getRank = () => {
  //   let ans = Array.from(
  //     reviews.reduce((a, { reviewee_id, rating }) => {
  //       return a.set(reviewee_id, (a.get(reviewee_id) || 0) + rating)
  //     }, new Map())
  //   )
  //   console.log(ans.sort((a, b) => b[1] - a[1]))
  //   return ans.sort((a, b) => b - a)[0]
  // }

  const getRank = () => {
    let sums = {}
    for (let i = 0; i < reviews.length; i++) {
      let obj = reviews[i]
      sums[obj.reviewee_id] =
        sums[obj.reviewee_id] === undefined ? 0 : sums[obj.reviewee_id]

      sums[obj.reviewee_id] += obj.rating
    }
    console.log(sums)
    let sortedArr
    sortedArr = Object.keys(sums)
      .sort((a, b) => {
        return sums[b] - sums[a]
      })
      .map((key) => ({ [key]: sums[key] }))
    console.log(sortedArr)
    // pulling out the first obj
    let trial = sortedArr.shift()
    console.log(Object.entries(trial)[0][1])
    return sortedArr.shift()
  }

  // get all the reviews (done)
  // add all the rating for each reviewee_id
  // sort the rating in order
  // display reviewee_id's name in descending order

  return <div>{reviews && getRank()}</div>
}

export default Hof
