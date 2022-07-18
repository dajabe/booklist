import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from './books/Add'
import BookList from './books/BookList'

export default function Content() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  )
}
