const config = require('../knexfile').development
const conn = require('knex')(config)

function getAuthors(db = conn) {
  return db('authors')
}

function getAuthorById(id, db = conn) {
  return db('authors').where({ id }).first()
}

function addAuthor(newAuthor, db = conn) {
  return db('authors').insert(newAuthor)
}

function updateAuthor(author, db = conn) {
  return db('authors').where({ id: author.id }).update(author)
}

function delAuthor(id, db = conn) {
  return db('authors').where({ id }).del()
}

module.exports = {
  getAuthors,
  getAuthorById,
  addAuthor,
  updateAuthor,
  delAuthor,
}
