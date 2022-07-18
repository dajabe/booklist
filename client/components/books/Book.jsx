import React from 'react'
import { useDispatch } from 'react-redux'
import { updateBook } from '../../api/books'
import { getBookList } from '../../redux/bookSlice'

export default function Books(props) {
  const dispatch = useDispatch()
  const { series, title, url, img_url, is_read } = props.book

  const toggleReadStatus = async (e) => {
    e.preventDefault
    await updateBook({ ...props.book, is_read: !is_read })
    dispatch(getBookList())
  }

  return (
    <div onClick={toggleReadStatus} className="card">
      <h3 className="card-title">
        <a href={url}>
          <img src={img_url} alt={title + ' cover'} />
        </a>
        {series && series + ': '}
        {title}
      </h3>
      <div className="card-details">
        <input
          readOnly={true}
          type="checkbox"
          checked={is_read}
          value="Have Read: "
        />
      </div>
    </div>
  )
}
