const connection = require('./connection')

function getReviews(db = connection) {
  return db('reviews').select()
}

function postReview(reviewee_id, reviewForm, db = connection) {
  return db('reviews').insert(reviewForm)
}

module.exports = {
  getReviews,
  postReview,
}
