import { useDispatch, useSelector } from "react-redux"
import { changeFloor } from "../features/changeFloor"
import { buttonPress } from "../features/buttonPressed"

const RightPanel = () => {
  const dispatch = useDispatch()
  const chosenFloor = useSelector((state) => state.floor.value.floor)
  const changeFloorClick = (selectedFloor) => {
    if (chosenFloor === selectedFloor) return
    dispatch(changeFloor({ floor: selectedFloor}))
    dispatch(buttonPress({ pressed: false}))
  }

  return (
    <div className="elevator-panel" id="right-panel">
        <div className="button-container">
          <div className="button-content">
            <div className="button" id="button-four" onClick={() => changeFloorClick("four")}>
              Contact
            </div>
            <div className="button" id="button-three" onClick={() => changeFloorClick("three")}>
              Projects
            </div>
            <div className="button" id="button-two" onClick={() => changeFloorClick("two")}>
              About
            </div>
            <div className="button" id="button-one" onClick={() => changeFloorClick("one")}>
              Main
            </div>
          </div>
        </div>
    </div>
  )
}

export default RightPanel