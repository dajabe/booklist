const express = require('express')
const router = express.Router()

const {
  getBooks,
  getBookById,
  getBooksByAuthor,
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

router.get('/')

module.exports = router
