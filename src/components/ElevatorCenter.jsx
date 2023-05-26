import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import ElevatorDoors from "./ElevatorDoors"
import MainFloor from "./MainFloor"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"

const checkFloor = (floor) => {
  switch (floor) {
    case "one":
      return <MainFloor />;
    case "two": 
      return <About />;
    case "three":
      return <Portfolio />;
    case "four":
      return <Contact />
    default:
      return null
  }
}

const ElevatorCenter = () => {

  const selectedFloor  = useSelector((state) => state.floor.value.floor)
  const [floorContent, setFloorContent] = useState(null)

  useEffect(() => {
    const delayContent = setTimeout(() => {
      setFloorContent(checkFloor(selectedFloor))
    }, 1500)

    return () => {
      clearTimeout(delayContent)
    }
  }, [selectedFloor])

  return (
    <div className="center-container">
      <div className="center-floor">
       {
        floorContent
       }
      </div>
      <ElevatorDoors />
    </div>
  )
}

export default ElevatorCenter