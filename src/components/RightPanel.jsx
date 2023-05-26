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

  let winWidth = window.screen.width;
  let winHeight = window.screen.height;

  let screenSize = winHeight * winWidth
  console.log(screenSize)
  return (
    <div className="elevator-panel" id="right-panel">
        <div className="button-container">
          <div className="button-content">
            <div className="button-inner-content">
              <div className="button-text">
                <h2>4</h2>
                <h3>Contact</h3>
              </div>
              <div className="button" id="button-four" onClick={() => changeFloorClick("four")}>
                
              </div>
            </div>
            <div className="button-inner-content">
              <div className="button-text">
                <h2>3</h2>
                <h3>Projects</h3>
              </div>
              <div className="button" id="button-three" onClick={() => changeFloorClick("three")}>
              
              </div>
            </div>
            <div className="button-inner-content">
              <div className="button-text">
                <h2>2</h2>
                <h3>About</h3>
              </div>
              <div className="button" id="button-two" onClick={() => changeFloorClick("two")}>
  
              </div>
            </div>
            <div className="button-inner-content">
              <div className="button-text">
                <h2>1</h2>
                <h3>Main</h3>
              </div>
              <div className="button" id="button-one" onClick={() => changeFloorClick("one")}>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RightPanel