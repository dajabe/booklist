import React from 'react'

export default function Books(props) {
  const { series, title, url } = props.book
  return (
    <div className="card">
      <h3 className="card-title">
        <a href={url}>
          {series && series + ': '}
          {title}
        </a>
      </h3>
      <div className="card-details"></div>
    </div>
  )
}
