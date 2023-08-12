import Project from '../../interfaces/project'
import './ProjectCard.css'
const ProjectCard = ( { project }: { project: Project } ) => {
  return (
    <div className='card-container row w-100'>
        <div className="col-lg-4">
            <img className='card-img' src={ project.image } alt="" />
        </div>
        <div className="col-lg-8 card-text">
            <div className="card-text-app">
                <a className='d-flex gap-3' href={project.link} target='_blank'><h5>{ project.name }</h5>   <i className="bi bi-link-45deg"></i></a>
            </div>
            <p>{ project.description }</p>
            <div className="tec-tools-container">
                {project.tecs.map(tec => (
                    <span key={tec}>{tec}</span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard