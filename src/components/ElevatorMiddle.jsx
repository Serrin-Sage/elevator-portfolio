import LeftPanel from "./LeftPanel"
import RightPanel from "./RightPanel"
import ElevatorDoors from "./ElevatorDoors"
import ElevatorCenter from "./ElevatorCenter"
import MainFloor from "./MainFloor"
const ElevatorMiddle = () => {
  return (
    <div className="elevator-middle-container">
        <LeftPanel />
        <ElevatorCenter />
        <RightPanel />
    </div>
  )
}

export default ElevatorMiddle