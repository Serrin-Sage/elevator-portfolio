import LeftPanel from "./LeftPanel"
import RightPanel from "./RightPanel"
import ElevatorDoors from "./ElevatorDoors"
import MainFloor from "./MainFloor"
const ElevatorMiddle = () => {
  return (
    <div className="elevator-middle-container">
        <LeftPanel />
        <MainFloor />
        <RightPanel />
    </div>
  )
}

export default ElevatorMiddle