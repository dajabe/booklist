import React from 'react'
import { useSelector } from 'react-redux'
import Book from './Book'

export default function BookList() {
  const books = useSelector((state) => state.bookSlice)
  return (
    <>
      {books?.list.map((book, i) => {
        return <Book key={i} book={book} />
      })}
    </>
  )
}
