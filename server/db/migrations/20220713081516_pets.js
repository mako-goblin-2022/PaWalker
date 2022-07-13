/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
  return knex.schema.createTable('pets', (table) => {
    table.integer('id')
    table.integer('owner_id')
    table.string('name')
    table.text('bio')
    table.string('breed')
    table.string('gender')
    table.string('colour')
    table.boolean('neutured')
    table.string('size')
    table.integer('age')
    table.string('img')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('pets')
}
