import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import elevatorFloorSlice from './features/changeFloor'
import './index.css'
import './stylesheets/elevatorstyle.scss'

const store = configureStore({
  reducer: {
    floor: elevatorFloorSlice
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
