import ImageSlider from "./ImageSlider"

const ProjectCard = ({ project, width }) =>  {
  return (
    <div className="project-item" style={{ width: width }}>
        <div className="project-cotent">
            <ImageSlider slides={project.images}/>
            <div className="project-text">
                {/* <div className="project-title">{project.title}</div>
                <div className="project-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div>Tech Used: {project.tech}</div>
                <div className="project-links">
                    {project.demo_url === "" ? "" : `Demo: ${project.demo_url}`}
                    <img src="/images/icons/GitHubicon.png" alt="GitHub Icon"/> 
                    <a href={project.frontend_url} target="_blank">Github</a>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard