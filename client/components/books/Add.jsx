import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { addBook } from '../../api/books'

export default function Add() {
  let navigate = useNavigate()
  const falseStr = (boolStr) => (boolStr == 'false' ? false : true)
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    await addBook({
      ...data,
      is_fiction: falseStr(data.is_fiction),
      is_read: false,
    })
    navigate('/', { replace: false })
  }

  return (
    <>
      <div className="add-book">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="series">Series</label>
          <input type="text" {...register('series')} />
          <label htmlFor="title">Title</label>
          <input type="text" {...register('title', { required: true })} />
          <div className="radio-group">
            <label className="radio-label" htmlFor="Fiction">
              Fiction
            </label>
            <input
              type="radio"
              id="Fiction"
              value={true}
              checked="checked"
              {...register('is_fiction')}
            />
            <label className="radio-label" htmlFor="notFiction">
              Non-Fiction
            </label>
            <input
              type="radio"
              id="notFiction"
              value={false}
              {...register('is_fiction')}
            />
          </div>
          <label htmlFor="genre">Genre</label>
          <select {...register('genre')}>
            <option value="Epic Fantasy">Epic Fantasy</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Personal Development">Personal Development</option>
          </select>
          <label htmlFor="referral">Referrer</label>
          <input type="text" {...register('referral')} />
          <label htmlFor="url">Link to book</label>
          <input type="text" {...register('url')} />
          <label htmlFor="img_url">Link to cover image</label>
          <input type="text" {...register('img_url')} />
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="add-author">
        <form></form>
      </div>
    </>
  )
}
