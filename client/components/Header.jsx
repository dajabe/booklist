import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  let navigate = useNavigate()

  function clickHandler(e) {
    e.preventDefault()
    navigate(`/`, { replace: false })
  }

  return (
    <>
      <header>
        <h1 onClick={clickHandler} className="title">
          Booklist
        </h1>
      </header>
    </>
  )
}
