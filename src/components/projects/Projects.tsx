import './Projects.css'
import ProjectCard from "../project-card/ProjectCard"
import Project from '../../interfaces/project'

// Proyectos antiguos retirados temporalmente.
// Se volverán a añadir (o sustituir) más adelante.
const projects: Project[] = []

const Projects = () => {
  // Mientras no haya proyectos, no mostramos la sección completa.
  if (projects.length === 0) return null

  return (
    <div className="projects-container" id='projects'>
        <h4> PROJECTS </h4>
        <div className="container-fluid">
            {projects.map( (project) => (
              <ProjectCard project = {project} key={project.link}/>
            ))}
        </div>
    </div>
  )
}

export default Projects
