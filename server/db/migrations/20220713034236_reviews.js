/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id')
    table.string('reviewer_id')
    table.string('reviewee_id')
    table.string('date')
    table.string('title')
    table.text('review')
    table.integer('rating')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('reviews')
}
