/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('book_authors').del()
  await knex('book_authors').insert([
    { book_id: 1, author_id: 1 },
    { book_id: 2, author_id: 2 },
    { book_id: 3, author_id: 3 },
  ])
}
