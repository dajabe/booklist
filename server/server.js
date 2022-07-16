const express = require('express')
const path = require('path')

const server = express()

const bookRoutes = require('./routes/books')
const authorRoutes = require('./routes/authors')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/books', bookRoutes)
server.use('/api/v1/authors', authorRoutes)

server.use('/api/v1/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
