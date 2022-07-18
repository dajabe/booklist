import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navigation() {
  let navigate = useNavigate()

  function clickHandler(e) {
    e.preventDefault()
    navigate(`/${e.target.id}`, { replace: false })
  }
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <button id="unread" onClick={clickHandler}>
              Unread
            </button>
          </li>
          <li>
            <button id="read" onClick={clickHandler}>
              Read
            </button>
          </li>
          <li>
            <button id="authors" onClick={clickHandler}>
              Authors
            </button>
          </li>
          <li>
            <button id="add" onClick={clickHandler}>
              Add
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
