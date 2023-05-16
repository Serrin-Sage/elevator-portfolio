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
        <div onClick={() => updateIndex(currentIndex - 1)} className="left-arrow" >{`<`}</div>
        <div onClick={() => updateIndex(currentIndex + 1)} className="right-arrow" >{`>`}</div>
        <img src={slides[currentIndex].url}/>
    </div>
  )
}

export default ImageSlider