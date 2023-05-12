import React from 'react'
import skills from '../features/skills.json'

function MainFloor() {
  
  console.log(skills)

  return (
    <div className='main-container'>
      <div className='main-content'>
        <h2>Serrin Doscher</h2>
        <div className='skills-column'>
          {
            skills.map((skill) => {
              return (
                <div key={skill.id} className='skill-icon-container'>
                  <img src={skill.icon} className='skill-icon-image'/>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MainFloor