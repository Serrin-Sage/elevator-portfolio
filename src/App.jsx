import { useState } from 'react'
import './App.css'
import ElevatorTop from './components/ElevatorTop'
import ElevatorMiddle from './components/ElevatorMiddle'

function App() {

  return (
    <div className="App">
      <ElevatorTop />
      <ElevatorMiddle />
    </div>
  )
}

export default App
