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
    .where('authors.id', '=', author_id)
    .select(
      'book_id',
      'series',
      'title',
      'is_fiction',
      'genre',
      'referral',
      'books.img_url as book_img',
      'books.url as book_url',
      'name as author_name',
      'authors.img_url as author_img',
      'authors.url as author_url',
      'is_read'
    )
}

function addBook(newBook, db = conn) {
  return db('books').insert(newBook)
}

function updateBook(book, db = conn) {
  return db('books').where({ id: book.id }).update(book)
}

module.exports = {
  getBooks,
  getBookById,
  getBooksByAuthor,
  addBook,
  updateBook,
}
