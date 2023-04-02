import { useSelector } from "react-redux"

const ElevatorTop = () => {
  const floor  = useSelector((state) => state.floor.value.floor)
  return (
    <div className="elevator-top">
        <div className="dial-container">
          <img src="src\images\DialBlack.png" className="elevator-dial" />
          <img src="src\images\DialArrow.png" className="dial-arrow" id={`floor-${floor}`}/>
          <div className="floor-number" id="number-one">
            <div className={floor === "one" ? "active" : "inactive"}>1</div>
          </div>
          <div className="floor-number" id="number-two">
            <div className={floor === "two" ? "active" : "inactive"}>2</div>
          </div>
          <div className="floor-number" id="number-three">
            <div className={floor === "three" ? "active" : "inactive"}>3</div>
          </div>
        </div>
    </div>
  )
}

export default ElevatorTop