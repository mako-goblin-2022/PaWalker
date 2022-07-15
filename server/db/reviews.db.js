const connection = require('./connection')

function getReviews(db = connection) {
  return db('reviews').select()
}

function postReview(reviewer_id, reviewForm, db = connection) {
  const { date, time, title, review, reviewee_id } = reviewForm
  return db('reviews').insert({ date, time, title, review, reviewer_id, reviewee_id })
}

module.exports = {
  getReviews,
  postReview,
}
