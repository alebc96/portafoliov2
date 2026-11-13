import { useLanguage } from '../../i18n/LanguageContext'
import './Projects.css'
import ProjectCard from "../project-card/ProjectCard"
import Project from '../../interfaces/project'

import guiaLicenciaImg from '../../assets/guia-licencia-web.png'

const projects: Project[] = [
  {
    image: guiaLicenciaImg,
    name: 'Guía B: teórico del permiso B',
    link: 'https://autoescuelanoads.netlify.app/,
    description: {
      en: 'Static study guide for the Spanish class B driving theory exam: 17 topics, a sign catalog, mock exams, a practice section, a searchable glossary and local progress tracking. No backend, no accounts, no cookies and no analytics.',
      es: 'Guía de estudio estática para el examen teórico del permiso B: 17 temas, catálogo de señales, examen de prueba, práctico, glosario con búsqueda y seguimiento de progreso en local. Sin backend, sin cuentas, sin cookies y sin analítica.',
    },
    tecs: ['Next.js', 'React', 'TypeScript', 'Markdown', 'Zod', 'Pagefind', 'Vitest', 'Docker']
  },
]

const Projects = () => {
  const { t } = useLanguage()

  // Mientras no haya proyectos, no mostramos la sección completa.
  if (projects.length === 0) return null

  return (
    <div className="projects-container" id='projects'>
        <h4> {t.projects.heading} </h4>
        <div className="container-fluid">
            {projects.map( (project) => (
              <ProjectCard project = {project} key={project.link}/>
            ))}
        </div>
    </div>
  )
}

export default Projects
