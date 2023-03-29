import { useState } from 'react'
import './App.css'
import ElevatorTop from './components/ElevatorTop'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

function App() {

  return (
    <div className="App">
      <ElevatorTop />
      <LeftPanel />
    </div>
  )
}

export default App
