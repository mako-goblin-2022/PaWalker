const connection = require('./connection')

function getReviewsdb(db = connection) {
  return db('reviews').select()
}

module.exports = {
  getReviews,
}
