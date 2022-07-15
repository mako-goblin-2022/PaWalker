const connection = require('./connection')

function getReviews(db = connection) {
  return db('reviews').select()
}

function postReview(reviewer_id, reviewForm, db = connection) {
  const { date, title, review, rating, reviewee_id } = reviewForm
  return db('reviews').insert({ date, title, review, rating, reviewer_id, reviewee_id })
}

module.exports = {
  getReviews,
  postReview,
}
