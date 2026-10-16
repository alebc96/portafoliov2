import { useLanguage } from '../../i18n/LanguageContext'
import './Experience.css'
import ExperienceCard from './experience-card/ExperienceCard'

const Experience = () => {
  const { t } = useLanguage()

  return (
    <div className='experience-container' id='experience'>
        <h4> {t.experience.heading} </h4>
        <div className="container-fluid">
            {t.experience.items.map( exp => (
              <ExperienceCard experience = {exp} key={exp.name}></ExperienceCard>
            ))}
        </div>
    </div>
  )
}

export default Experience
