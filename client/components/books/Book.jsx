import React from 'react'
import { useDispatch } from 'react-redux'
import { updateBook, delBook } from '../../api/books'
import { getBookList } from '../../redux/bookSlice'
import { FaTrash } from 'react-icons/fa'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'

export default function Books(props) {
  const dispatch = useDispatch()
  const { id, series, title, url, img_url, is_read } = props.book

  const toggleReadStatus = async (e) => {
    e.preventDefault
    await updateBook({ ...props.book, is_read: !is_read })
    dispatch(getBookList())
  }

  const handleDeleteBook = async (e) => {
    e.preventDefault
    await delBook(id)
    dispatch(getBookList())
  }

  return (
    <div className="card">
      <a href={url}>
        <img src={img_url} alt={title + ' cover'} />
      </a>
      <h3 className="card-title">
        {series && series + ': '}
        {title}
      </h3>
      <div className="card-details">
        <div onClick={toggleReadStatus} className="read-icon">
          {is_read ? (
            <ImCheckboxChecked size="28px" />
          ) : (
            <ImCheckboxUnchecked size="28px" />
          )}
        </div>
        <div onClick={handleDeleteBook} className="trash-icon">
          <FaTrash size="28px" />
        </div>
      </div>
    </div>
  )
}
