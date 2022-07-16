import request from 'superagent'

const rootUrl = '/api/v1/books'

export function getBooks() {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}
