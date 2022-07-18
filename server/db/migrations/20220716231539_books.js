/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('books', (t) => {
    t.increments('id').primary()
    t.string('series')
    t.string('title')
    t.boolean('is_fiction')
    t.string('genre')
    t.string('referral')
    t.boolean('is_read')
    t.text('img_url')
    t.text('url')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('books')
}
