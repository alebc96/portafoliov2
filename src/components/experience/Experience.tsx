import './Experience.css'
import ExperienceCard from './experience-card/ExperienceCard'

const experiences = [
  {
    date_range: '2022 - 2023',
    name: "University of Seville - Master's in Cloud Software Engineering, Data, and GT, Seville, Spain.",
    description: 'Pursuing the Cloud Engineering specialization, notable subjects include: Software as Microservices, Software as a Service Architecture, Client Technologies, Operations and Service Deployment, Machine Learning, Mobile Technologies.',
    extra: ['Docker', 'NodeJS', 'AngularJs', 'ReactJs', 'MongoDB', 'Android Studio', 'Machine Learning', 'Python']
  },
  {
    date_range: '2021 - 2022',
    name: "Freelance Layout Designer",
    description: 'I worked for a while as a component layout designer in ReactJS, where my role was to translate Figma designs into HTML, CSS, and JavaScript code.',
    extra: ['ReactJs', 'CSS', 'JSX', 'Bootstrap']
  },
  {
    date_range: '2020 - 2022',
    name: "Computer Engineer",
    description: 'Worked as a computer engineer in a postal company, holding the position of junior developer in the internal management system models using AngularJS and NodeJs, in addition to being a network administrator.',
    extra: ['Angular', 'CSS', 'HTML', 'Bootstrap', 'NodeJs', 'MySQL']
  },
  {
    date_range: '2015 - 2020',
    name: 'University Studies: Computer Engineering.',
    description: 'University degree focused on software engineering, highlighted subjects: Object-Oriented Programming, Web Programming, Databases, Artificial Intelligence, Discrete Mathematics, Digital Image Processing.',
    extra: ['POO', 'Web Programming', 'Relational Databases']
  },
  
]

const Experience = () => {
  return (
    <div className='experience-container' id='experience'>
        <h4> EXPERIENCE & TRAINING </h4>
        <div className="container-fluid">
            {experiences.map( exp => (
              <ExperienceCard experience = {exp}></ExperienceCard>
            ))}
        </div>
    </div>
  )
}

export default Experience