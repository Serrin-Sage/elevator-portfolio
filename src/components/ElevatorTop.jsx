import { useSelector, useDispatch } from "react-redux"
import { buttonPress } from "../features/buttonPressed"

const ElevatorTop = () => {
  const dispatch = useDispatch()
  const floor  = useSelector((state) => state.floor.value.floor)
  
  const test = document.querySelector(".dial-arrow")
  test.addEventListener("transitionend", () => {
    console.log("DONE")
    dispatch(buttonPress({ pressed: true}))
  })
  return (
    <div className="elevator-top">
        <div className="dial-container">
          <img src="src\images\DialBlack.png" className="elevator-dial" />
          <img src="src\images\DialArrow.png" className="dial-arrow" id={`floor-${floor}`}/>
          <div className="floor-number" id="number-one">
            <div className={floor === "one" ? "active" : "inactive"}>M</div>
          </div>
          <div className="floor-number" id="number-two">
            <div className={floor === "two" ? "active" : "inactive"}>A</div>
          </div>
          <div className="floor-number" id="number-three">
            <div className={floor === "three" ? "active" : "inactive"}>P</div>
          </div>
          <div className="floor-number" id="number-four">
            <div className={floor === "four" ? "active" : "inactive"}>C</div>
          </div>
        </div>
    </div>
  )
}

export default ElevatorTop