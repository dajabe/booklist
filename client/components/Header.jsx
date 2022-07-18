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
        <h1 className="title">
          <button
            className="title"
            onClick={clickHandler}
            onKeyPress={clickHandler}
          >
            Booklist
          </button>
        </h1>
      </header>
    </>
  )
}
