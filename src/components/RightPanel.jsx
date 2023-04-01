import { useDispatch } from "react-redux"
import { changeFloor } from "../features/changeFloor"

const RightPanel = () => {
  const dispatch = useDispatch()

  const changeFloorClick = (selectedFloor) => {
    dispatch(changeFloor({ floor: selectedFloor}))
  }

  return (
    <div className="elevator-panel" id="right-panel">
        RightPanel
        <div className="button-container">
          <div className="button-content">
            <div className="button" id="button-one" onClick={() => changeFloorClick("one")}>
              1
            </div>
            <div className="button" id="button-two" onClick={() => changeFloorClick("two")}>
              2
            </div>
            <div className="button" id="button-three" onClick={() => changeFloorClick("three")}>
              3
            </div>
            <div className="button" id="button-four">

            </div>
          </div>
        </div>
    </div>
  )
}

export default RightPanel