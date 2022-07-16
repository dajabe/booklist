import request from 'superagent'

const rootUrl = '/api/v1/authors'

export function getAuthors() {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}
