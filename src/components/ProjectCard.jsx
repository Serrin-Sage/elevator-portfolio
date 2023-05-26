import ImageSlider from "./ImageSlider"

const ProjectCard = ({ project, width }) =>  {
  return (
    <div className="project-item" style={{ width: width }}>
        <div className="project-cotent">
            <ImageSlider slides={project.images}/>
            <div className="project-text">
                <div className="project-title">{project.title}</div>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <div>Tech Used: {project.tech}</div>
                <div className="project-links">
                    {project.demo_url === "" ? "" : `Demo: ${project.demo_url}`}
                    <img src="/images/icons/GitHubicon.png" alt="GitHub Icon"/> 
                    <a href={project.frontend_url} target="_blank">Github</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard