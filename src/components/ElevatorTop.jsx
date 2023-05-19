import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { buttonPress } from "../features/buttonPressed"

const ElevatorTop = () => {
  const dispatch = useDispatch()
  const floor  = useSelector((state) => state.floor.value.floor)
  
  useEffect(() => {
    const elevatorDial = document.querySelector(".dial-arrow")
    elevatorDial.addEventListener("transitionend", () => {
      console.log("DONE")
      dispatch(buttonPress({ pressed: true}))
    })

    return () => {
      elevatorDial.removeEventListener("transitionend", () => {
        console.log("DONE")
        dispatch(buttonPress({ pressed: true }))
      })
    }
  }, [dispatch])

  return (
    <div className="elevator-top">
        <div className="dial-container">
          <img src="public\images\DialBlack.png" className="elevator-dial" />
          <img src="public\images\DialArrow.png" className="dial-arrow" id={`floor-${floor}`}/>
          <div className="floor-number" id="number-one">
            <div className={floor === "one" ? "active" : "inactive"}>1</div>
          </div>
          <div className="floor-number" id="number-two">
            <div className={floor === "two" ? "active" : "inactive"}>2</div>
          </div>
          <div className="floor-number" id="number-three">
            <div className={floor === "three" ? "active" : "inactive"}>3</div>
          </div>
          <div className="floor-number" id="number-four">
            <div className={floor === "four" ? "active" : "inactive"}>4</div>
          </div>
        </div>
    </div>
  )
}

export default ElevatorTop