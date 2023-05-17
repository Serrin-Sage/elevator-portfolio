import { useState } from "react"

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
        newIndex = 0
    } else if (newIndex >= slides.length) {
        newIndex = slides.length - 1
    }
    console.log(newIndex)
    setCurrentIndex(newIndex)
  }

  return (
    <div className="image-slider">
        <div onClick={() => updateIndex(currentIndex - 1)} className={currentIndex === 0 ? "hide-arrow" : "left-arrow"} >
          <img src="src\images\icons\LeftArrow.png" className="arrow-icon"/>
        </div>
        <div onClick={() => updateIndex(currentIndex + 1)} className={currentIndex >= slides.length - 1 ? "hide-arrow" : "right-arrow"} >
          <img src="src\images\icons\RightArrow.png" className="arrow-icon"/>
        </div>
        <img src={slides[currentIndex].url} className="project-images"/>
    </div>
  )
}

export default ImageSlider