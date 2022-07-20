import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllUsers } from '../features/users/usersSlice'
import Header from './Header'

function Rank() {
  const dispatch = useDispatch()

  const reviews = useSelector((state) => {
    return state.review.reviews
  })

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [reviews])

  const allUsers = useSelector((state) => {
    // console.log(state.user.users)
    return state.user.users
  })

  const getRank = () => {
    let result = Object.values(
      reviews.reduce((c, { reviewee_id, rating }) => {
        c[reviewee_id] = c[reviewee_id] || { reviewee_id, rating: 0 }
        c[reviewee_id].rating += rating
        return c
      }, {})
    )

    let sorted = result.sort((a, b) => b.rating - a.rating).slice(0, 3)
    console.log('the whole list: ', sorted)
    // console.log('the first element: ', sorted[0])
    // console.log('first key within the first element: ', sorted[0]?.reviewee_id)
    return sorted
  }

  const topRev = getRank()

  const getRankerProfile = () => {
    let result = allUsers.filter((el) =>
      topRev.some((topRev) => topRev.reviewee_id === el.auth0_id)
    )
    // console.log(result)
    return result
  }

  let rankerProfile = getRankerProfile()

  let goldProfile = rankerProfile?.find((i) => i.auth0_id === topRev[0].reviewee_id)
  let silverProfile = rankerProfile?.find((i) => i.auth0_id === topRev[1].reviewee_id)
  let bronzeProfile = rankerProfile?.find((i) => i.auth0_id === topRev[2].reviewee_id)

  return (
    <>
      <Header />

      <div>Gold</div>
      <div>User ID: {reviews && topRev[0]?.reviewee_id}</div>
      <div>Total Rating: {reviews && topRev[0]?.rating}</div>
      <div>Name: {reviews && goldProfile?.name}</div>
      <div>{reviews && <img src={goldProfile?.img} alt='goldRanker' />}</div>
      <div>--------------------------</div>

      <div>Silver</div>
      <div>User ID: {reviews && topRev[1]?.reviewee_id}</div>
      <div>Total Rating: {reviews && topRev[1]?.rating}</div>
      <div>Name: {reviews && silverProfile?.name}</div>
      <div>{reviews && <img src={silverProfile?.img} alt='silverRanker' />}</div>
      <div>--------------------------</div>

      <div>Bronze</div>
      <div>User ID: {reviews && topRev[2]?.reviewee_id}</div>
      <div>Total Rating: {reviews && topRev[2]?.rating}</div>
      <div>Name: {reviews && bronzeProfile?.name}</div>
      <div>{reviews && <img src={bronzeProfile?.img} alt='bronzeRanker' />}</div>
    </>
  )
}

export default Rank
