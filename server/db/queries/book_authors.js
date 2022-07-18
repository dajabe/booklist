const config = require('../knexfile').development
const conn = require('knex')(config)

function addBookAuthor(bookAuthor, db = conn) {
  const { book_id, author_id } = bookAuthor
  return db('book_authors').insert({ book_id, author_id })
}

function delBookAuthor(bookAuthor, db = conn) {
  const { book_id, author_id } = bookAuthor
  return db('book_authors').del({ book_id, author_id })
}

module.exports = {
  addBookAuthor,
  delBookAuthor,
}
