const ProjectCard = ({ project, width }) =>  {
  return (
    <div className="project-item" style={{ width: width }}>
        <div className="project-cotent">
            <img src={project.image} />
            <div className="project-text">
                <div>{project.title}</div>
                <p className="project-description">{project.description}</p>
                <div>Technology Used: {project.tech}</div>
                <div className="project-links">
                    {project.demo_url === "" ? "" : `Demo: ${project.demo_url}`}
                    Github: <a href={project.frontend_url} target="_blank">Github</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard