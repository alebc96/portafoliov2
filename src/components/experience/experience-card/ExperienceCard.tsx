import Experience from '../../../interfaces/experience'
import './ExperienceCard.css'

const ExperienceCard = ( {experience}: {experience: Experience} ) => {
  return (
    <div className='card-container row w-100'>
    <div className="col-lg-4">
       <p className='text-center'>{experience.date_range}</p>
    </div>
    <div className="col-lg-8 card-text">
        <div className="d-flex gap-4 card-text-app">
            <h5>{experience.name}</h5>
        </div>
        <p>{experience.description}</p>
        <div className="tec-tools-container">
          {experience.extra.map(extra => (
            <span>{extra}</span>
          ))}
        </div>
    </div>
</div>
  )
}

export default ExperienceCard