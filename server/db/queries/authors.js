const config = require('../knexfile').development
const conn = require('knex')(config)

function getAuthors(db = conn) {
  return db('authors')
}

function getAuthorById(id, db = conn) {
  return db('authors').where({ id }).first()
}

module.exports = {
  getAuthors,
  getAuthorById,
}
