import React from 'react'
import skills from '../features/skills.json'

function MainFloor() {
  
  console.log(skills)

  return (
    <div className='main-container'>
      <div className='main-content'>
        <h1>Serrin Doscher</h1>
        <div className='skills-column'>
          {
            skills.map((skill) => {
              return (
                <div key={skill.id}>
                  <img src={skill.icon} className='skill-icon'/>
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