const express = require('express')
const router = express.Router()

const { getAuthors, getAuthorById } = require('../db/queries/authors')

//~ GET /api/v1/authors/

router.get('/', async (req, res) => {
  const authors = await getAuthors()
  res.json(authors)
})

router.get('/:id', async (req, res) => {
  const author = await getAuthorById(req.params.id)
  res.json(author)
})

module.exports = router
