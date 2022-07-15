/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
  return knex.schema.createTable('walkers', (table) => {
    table.string('auth0_id').primary()
    table.string('name')
    table.string('location')
    table.text('bio')
    table.string('email')
    table.integer('phone_number')
    table.boolean('approachable')
    table.string('rank')
    table.string('availability')
    table.string('img')
    table.boolean('walker')
    table.boolean('owner')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('walkers')
}
