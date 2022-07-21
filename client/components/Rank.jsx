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
  }, [dispatch, reviews])

  const allUsers = useSelector((state) => {
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
    return sorted
  }

  const topRev = getRank()

  const getRankerProfile = () => {
    let result = allUsers.filter((el) =>
      topRev.some((topRev) => topRev.reviewee_id === el.auth0_id)
    )

    return result
  }

  let rankerProfile = getRankerProfile()

  let goldProfile = rankerProfile?.find(
    (i) => i.auth0_id === topRev[0].reviewee_id
  )
  let silverProfile = rankerProfile?.find(
    (i) => i.auth0_id === topRev[1].reviewee_id
  )
  let bronzeProfile = rankerProfile?.find(
    (i) => i.auth0_id === topRev[2].reviewee_id
  )

  return (
    <div className="w-full mx-auto">
      <Header />

      <main className=" w-80 mx-auto mt-5">
        <section className="text-amber-500 font-bold">
          <div>Gold</div>
          <div>User ID: {reviews && topRev[0]?.reviewee_id}</div>
          <div>Total Rating: {reviews && topRev[0]?.rating}</div>
          <div>Name: {reviews && goldProfile?.name}</div>
          <div >
            {reviews && <img className='rounded-xl' src={goldProfile?.img} alt="goldRanker" />}
          </div>
        </section>

        <section className="block float-left text-slate-600 font-bold m-5">
          <div className="inline-block">
            <div>Silver</div>
            <div>User ID: {reviews && topRev[1]?.reviewee_id}</div>
            <div>Total Rating: {reviews && topRev[1]?.rating}</div>
            <div>Name: {reviews && silverProfile?.name}</div>
            <div>
              {reviews && <img className='rounded-xl' src={silverProfile?.img} alt="silverRanker" />}
            </div>
          </div>
          <div className="inline-block text-amber-700 font-bold m-5">
            <div>Bronze</div>
            <div>User ID: {reviews && topRev[2]?.reviewee_id}</div>
            <div>Total Rating: {reviews && topRev[2]?.rating}</div>
            <div>Name: {reviews && bronzeProfile?.name}</div>
            <div>
              {reviews && <img className='rounded-xl' src={bronzeProfile?.img} alt="bronzeRanker" />}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Rank
