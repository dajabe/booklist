import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from './Header'
import Content from './Content'
import Navigation from './Navigation'
import { getBookList } from '../redux/bookSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBookList())
  }, [])

  return (
    <>
      <Header />
      <Content />
      <Navigation />
    </>
  )
}

export default App
