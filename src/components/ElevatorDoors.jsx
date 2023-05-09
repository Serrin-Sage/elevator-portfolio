import { useSelector } from "react-redux"

const ElevatorDoors = () => {

  const doorOpen  = useSelector((state) => state.button.value.pressed)
  
  return (
    <div className="door-container">
      <div className="door" id={doorOpen ? "open-left" : "left-door"}>

      </div>
      <div className="door" id={doorOpen ? "open-right" : "right-door"}>

      </div>
    </div>
  )
}

export default ElevatorDoors