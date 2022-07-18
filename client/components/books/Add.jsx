import React from 'react'
import { useForm } from 'react-hook-form'

export default function Add() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="series">Series</label>
        <input {...register('series')} />
        <label htmlFor="title">Title</label>
        <input {...register('title', { required: true })} />
        {/* <input type="radio" {...register("isFiction")} /> */}
        <select {...register('genre')}>
          <option value="epic_fantasy">Epic Fantasy</option>
          <option value="fantasy">Fantasy</option>
          <option value="personal_development">Personal Development</option>
        </select>
        <label htmlFor="url">Link to book</label>
        <input {...register('url')} />
        <label htmlFor="img_url">Link to cover image</label>
        <input {...register('img_url')} />
      </form>
    </>
  )
}
