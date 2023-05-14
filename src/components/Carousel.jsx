import { useState } from "react"
import projects from '../features/projects.json'
import ProjectCard from "./ProjectCard"

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
        newIndex = 0
    } else if (newIndex >= projects.length) {
        newIndex = projects.length - 1
    }
    console.log(newIndex)
    setActiveIndex(newIndex)
  }

  return (
    <div className="carousel">
        <div className="inner-items" style={{ transform: `translate(-${activeIndex * 100}%)`}}>
            {projects.map((project) => {
                return <ProjectCard project={project} width={"100%"}/>
            })}
        </div>

        <div className="carousel-buttons">
            <button onClick={() => updateIndex(activeIndex - 1)}>LEFT</button>
            <button onClick={() => updateIndex(activeIndex + 1)}>RIGHT</button>
        </div>
    </div>
  )
}

export default Carousel