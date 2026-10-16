import { useLanguage } from '../../i18n/LanguageContext'
import './MainInfo.css'

const MainInfo = () => {
    const { t } = useLanguage()

    const handleNavigation = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if(section){
            section.scrollIntoView({behavior: 'smooth'})
        }
    }

  return (
    <div className="main-info-container">
        <section className='resume-section'>
            <h2>Manuel Alejandro</h2>
            <p className='p-title'>{t.mainInfo.title}</p>
            <p className='p-about'>{t.mainInfo.about}</p>
        </section>

        <section className="navegation-section">
            <ul>
                <li className='m-2' onClick={()=> handleNavigation('about')}> {t.nav.about} </li>
                <li className='m-2' onClick={()=> handleNavigation('experience')}> {t.nav.experience} </li>
                <li className='m-2' onClick={()=> handleNavigation('projects')}> {t.nav.projects} </li>
            </ul>
        </section>

        <section className="social-section">
            <a href="https://github.com/alebc96" target='_blank'>
                <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/manuel-alejandro-becerra-castro/" target='_blank'>
                <i className="bi bi-linkedin"></i>
            </a>
            <a href="" target='_blank'>
                <i className="bi bi-envelope-open-fill"></i>
            </a>
        </section>
    </div>

    
  )
}

export default MainInfo
