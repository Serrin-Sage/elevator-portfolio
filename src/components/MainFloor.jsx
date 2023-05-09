import { useSelector } from "react-redux"

import ElevatorDoors from "./ElevatorDoors"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"

const checkFloor = (floor) => {
  switch (floor) {
    case "one":
      return <Main />;
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
const MainFloor = () => {

  const selectedFloor  = useSelector((state) => state.floor.value.floor)

  return (
    <div className="main-container">
      <div className="main-floor">
       {
        checkFloor(selectedFloor)
       }
      </div>
      <ElevatorDoors />
    </div>
  )
}

export default MainFloor