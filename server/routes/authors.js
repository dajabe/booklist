const express = require('express')
const router = express.Router()

const {
  getAuthors,
  getAuthorById,
  addAuthor,
  updateAuthor,
  delAuthor,
} = require('../db/queries/authors')

//~ GET /api/v1/authors/

router.get('/', async (req, res) => {
  const authors = await getAuthors()
  res.json(authors)
})

router.get('/:id', async (req, res) => {
  const author = await getAuthorById(req.params.id)
  res.json(author)
})

router.post('/', async (req, res) => {
  const data = { ...req.body }
  const newAuthor = await addAuthor(data)
  res.json(newAuthor)
})

router.patch('/', async (req, res) => {
  const data = { ...req.body }
  const newAuthor = await updateAuthor(data)
  res.json(newAuthor)
})

router.delete('/', async (req, res) => {
  const deletedAuthor = await delAuthor(Number(req.body.id))
  // const deletedAuthor = req.body.id
  res.json(deletedAuthor)
})

module.exports = router
