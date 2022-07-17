const express = require('express')
const router = express.Router()

const {
  getBooks,
  getBookById,
  getBooksByAuthor,
  addBook,
  updateBook,
} = require('../db/queries/books')

//~ GET /api/v1/books/

router.get('/', async (req, res) => {
  const books = req.query.author
    ? await getBooksByAuthor(Number(req.query.author))
    : await getBooks()
  res.json(books)
})

router.get('/:id', async (req, res) => {
  const book = await getBookById(req.params.id)
  res.json(book)
})

router.post('/', async (req, res) => {
  const data = { ...req.body }
  const newBook = await addBook(data)
  res.json(newBook)
})

router.patch('/', async (req, res) => {
  const data = { ...req.body }
  const newBook = await updateBook(data)
  res.json(newBook)
})

module.exports = router
