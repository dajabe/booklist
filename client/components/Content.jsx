import React from 'react'
import { useSelector } from 'react-redux'
import Book from './books/Book'

export default function Content() {
  const books = useSelector((state) => state.bookSlice)
  return (
    <div className="container">
      {/* <h2 className="content-heading">To Read</h2> */}
      {books?.list.map((book, i) => {
        return <Book key={i} book={book} />
      })}
    </div>
  )
}
