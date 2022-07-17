const config = require('../knexfile').development
const conn = require('knex')(config)

function getBooks(db = conn) {
  return db('books')
}

function getBookById(id, db = conn) {
  return db('books').where({ id }).first()
}

function getBooksByAuthor(author_id, db = conn) {
  return db('books')
    .join('book_authors', 'book_authors.book_id', 'books.id')
    .join('authors', 'authors.id', 'book_authors.author_id')
    .where('authors.id', 'is', author_id)
}

module.exports = {
  getBooks,
  getBookById,
  getBooksByAuthor,
}
