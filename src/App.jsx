import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { buttonPress } from "./features/buttonPressed"
import './App.css'
import ElevatorTop from './components/ElevatorTop'
import ElevatorMiddle from './components/ElevatorMiddle'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const delayContent = setTimeout(() => {
      dispatch(buttonPress({ pressed: true}))
    }, 1400)
    return () => {
      clearTimeout(delayContent)
    }
  },[])
  return (
    <div className="App">
      <ElevatorTop />
      <ElevatorMiddle />
    </div>
  )
}

export default App
