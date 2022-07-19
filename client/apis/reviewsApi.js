import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllReviews() {
  return request.get(rootUrl + '/reviews').then((res) => {
    return res.body
  })
}

export function postReview(reviewForm) {
  return request
    .post(rootUrl + '/reviews/post')
    .send(reviewForm)
    .then((res) => {
      console.log(res)
      return res
    })
}
