import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import elevatorFloorSlice from './features/changeFloor'
import buttonPressSlice from './features/buttonPressed'
import './index.css'
import './stylesheets/elevatorstyle.scss'
import './stylesheets/mainfloorstyle.scss'
import './stylesheets/aboutstyle.scss'
import './stylesheets/contactstyle.scss'
import './stylesheets/portfoliostyle.scss'

const store = configureStore({
  reducer: {
    floor: elevatorFloorSlice,
    button: buttonPressSlice
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
