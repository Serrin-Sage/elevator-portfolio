import { useState, useEffect } from "react"
import projects from '../features/projects.json'
import ProjectCard from "./ProjectCard"

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isScreenSmall, setIsScreenSmall] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerHeight < 900);
    }
    
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[])

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
        newIndex = 0
    } else if (newIndex >= projects.length) {
        newIndex = projects.length - 1
    }
    console.log(newIndex)
    setActiveIndex(newIndex)
  }

  const SmallNavButtons = () => {
    return (
      <>
       <div className="nav-buttons">
        <>
          <div onClick={() => updateIndex(activeIndex - 1)} className={activeIndex === 0 && "hidden-button"}>
            <img src={"/images/icons/ProjectArrowW.png"} className="previous-button"/>
          </div>
          <div onClick={() => updateIndex(activeIndex + 1)} className={activeIndex === projects.length - 1 && "hidden-button"}>
              <img src={"/images/icons/ProjectArrowW.png"} className="next-button"/>
          </div>
        </>
       </div>
      </>
    )
  }

  const CarouselButtons = () => {
    return  (
      <>
        <div className="carousel-buttons">
          {activeIndex !== 0 && 
            <div>
              <img src={"/images/icons/PreviousSymbol.png"}/>
              <button onClick={() => updateIndex(activeIndex - 1)}>PREVIOUS</button>
            </div>
          }
          {activeIndex !== projects.length - 1 && 
            <div>
              <button onClick={() => updateIndex(activeIndex + 1)}>NEXT</button>
              <img src={"/images/icons/NextSymbolB.png"}/>
            </div>
          }
        </div>
      </>
    )
  }
  return (
    <div className="carousel">
        <div className="inner-items" style={{ transform: `translate(-${activeIndex * 100}%)`}}>
            {projects.map((project) => {
                return <ProjectCard key={project.id} project={project} width={"100%"}/>
            })}
        </div>   
        {isScreenSmall ? <SmallNavButtons /> : <CarouselButtons />}
    </div>
  )
}

export default Carousel