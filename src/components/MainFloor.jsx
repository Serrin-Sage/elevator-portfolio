import SkillCard from './SkillCard'
import skills from '../features/skills.json'
import ResumePDF from '/Resume 2023.pdf'
function MainFloor() {

  return (
    <div className='main-container'>
      <div className='main-frame'>
        <div className='main-content'>
          <h2>Serrin Doscher</h2>
          <div className='sub-content'>
            <p>Software Engineer</p>
            <p>Full-Stack Developer</p>
          </div>
          <div className='skills-column'>
            {
              skills.map((skill) => {
                return (
                  <SkillCard key={skill.id} skill={skill} />
                )
              })
            }
          </div>
          <div className='resume-container'>
            <a href={ResumePDF}  download="Serrin Doscher Resume">
              <div> <img src="src\images\icons\DownloadIconW.png" alt="Download Icon"/> Resume </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFloor