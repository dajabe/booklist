import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'

import App from './components/App'
import { store } from './redux/store'

const container = document.getElementById('app')
const root = createRoot(container)
document.addEventListener('DOMContentLoaded', () => {
  root.render(
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  )
})
