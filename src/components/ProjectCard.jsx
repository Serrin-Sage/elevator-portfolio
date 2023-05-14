const ProjectCard = ({ project, width }) =>  {
  return (
    <div className="project-item" style={{ width: width }}>
        <div className="project-cotent">
            <img src={project.image} />
            <div className="project-text">
                <div>{project.title}</div>
                <p className="project-description">{project.description}</p>
                <div>{project.tech}</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard