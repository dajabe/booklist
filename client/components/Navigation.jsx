import React from 'react'

export default function Navigation() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <button>Unread</button>
          </li>
          <li>
            <button>Read</button>
          </li>
          <li>
            <button>Authors</button>
          </li>
          <li>
            <button>Add</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
