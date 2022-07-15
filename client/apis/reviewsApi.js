import request from 'superagent'

const rootUrl = '/api/v1'

export function getReviews() {
  return request.get(rootUrl + '/reviews').then((res) => {
    return res.body.reviews
  })
}

export function postReview() {
  return request.post(rootUrl + '/reviews/post').then((res) => {
    console.log(res)
    return res
  })
}
