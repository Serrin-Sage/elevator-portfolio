import { useState } from "react"

const SkillCard = ({skill}) => {
  const [hoverOver, setHoverOver] = useState(false)

  return (
    <div key={skill.id} className='skill-icon-container' onMouseOver={() => setHoverOver(true)} onMouseOut={() => setHoverOver(false)}>
        <img src={skill.icon} className='skill-icon-image'/>
        {hoverOver ? <div className="hover-text">{skill.name}</div> : null}
    </div>
  )
}

export default SkillCard