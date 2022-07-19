const connection = require('./connection')

function getAllReviews(db = connection) {
  return db('reviews').select()
}

function postReview(reviewer_id, reviewForm, db = connection) {
  return db('reviews')
    .insert({ ...reviewForm, reviewer_id })
    .then(([id]) => {
      return { ...reviewForm, reviewer_id, id }
    })
}

module.exports = {
  getAllReviews,
  postReview,
}
