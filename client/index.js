import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'
import { store } from './redux/store'

const container = document.getElementById('app')
const root = createRoot(container)
document.addEventListener('DOMContentLoaded', () => {
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
})
