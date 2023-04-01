const ElevatorTop = () => {
  return (
    <div className="elevator-top">
        <div className="dial-container">
          <img src="src\images\DialBlack.png" className="elevator-dial"/>
          <img src="src\images\DialArrow.png" className="dial-arrow"/>
          <div className="floor-number" id="floor-one">
            1
          </div>
          <div className="floor-number" id="floor-two">
            2
          </div>
          <div className="floor-number" id="floor-three">
            3
          </div>
        </div>
    </div>
  )
}

export default ElevatorTop