const ProjectCard = ({ project, width }) =>  {
  return (
    <div className="project-item" style={{ width: width }}>
        <div className="project-cotent">
            <div>{project.title}</div>
            <div className="project-description">{project.description}</div>
        </div>
    </div>
  )
}

export default ProjectCard