const express = require('express')
const router = express.Router()

const {
  getBooks,
  getBookById,
  getBooksByAuthor,
} = require('../db/queries/books')

router.get('/', async (req, res) => {
  const books = req.query.author
    ? await getBooksByAuthor(Number(req.query.author))
    : await getBooks()
  res.json(books)
})

router.get('/:id', async (req, res) => {
  const books = await getBookById(req.params.id)
  res.json(books)
})

router.get('/')

module.exports = router
