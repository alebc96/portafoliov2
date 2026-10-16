import { useLanguage } from '../../i18n/LanguageContext'
import './AboutInfo.css'

const AboutInfo = () => {
  const { t } = useLanguage()

  return (
    <div className="about-info-text" id='about'>
        <h4>{t.about.heading}</h4>
        <p>{t.about.text}</p>
    </div>
  )
}

export default AboutInfo
