import SkillCard from './SkillCard'
import skills from '../features/skills.json'
import { saveAs } from 'file-saver'

function MainFloor() {

  const downloadResume = () => {
    const pdfBlob = new Blob(["public/Resume 2023.pdf"], { type: "application/pdf" });
    saveAs(pdfBlob, "SerrinDoscherResume.pdf");
  }
  return (
    <div className='main-container'>
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
                <SkillCard skill={skill} />
              )
            })
          }
        </div>
        <div className='resume-container'>
          <button onClick={downloadResume}>Download Resume</button>
        </div>
      </div>
    </div>
  )
}

export default MainFloor