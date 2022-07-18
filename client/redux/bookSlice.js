import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBooks } from '../api/books'

const initialState = {
  list: [],
  loading: false,
}

export const getBookList = createAsyncThunk('books/getBooks', async () => {
  try {
    const res = await getBooks()
    return res
  } catch {
    return new Error('Ruh Roh Raggy! We got no books!')
  }
})

export const bookListSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (b) => {
    b.addCase(getBookList.pending, (state) => {
      state.loading = true
    })
    b.addCase(getBookList.fulfilled, (state, { payload }) => {
      state.loading = false
      state.list = payload
    })
    b.addCase(getBookList.rejected, (state) => {
      state.loading = false
    })
  },
})

export default bookListSlice.reducer
