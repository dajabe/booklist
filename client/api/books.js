import request from 'superagent'

const rootUrl = '/api/v1/books'

export function getBooks() {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export function addBook(book) {
  return request
    .post(rootUrl)
    .send(book)
    .then((res) => res.body)
}

export function updateBook(book) {
  return request
    .patch(rootUrl)
    .send(book)
    .then((res) => res.body)
}
