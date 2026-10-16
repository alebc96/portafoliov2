import './Home.css'
import MainInfo from "../../components/main_info/MainInfo"
import AboutInfo from '../../components/about-info/AboutInfo'
import Experience from '../../components/experience/Experience'
import Projects from '../../components/projects/Projects'
import { ButtonTop } from '../../components/btn-top/ButtonTop'
import LanguageSwitcher from '../../components/language-switcher/LanguageSwitcher'


const Home = () => {
  return (
    <>
      <div className="home-container">
          <div className="main-info">
              <MainInfo></MainInfo>
          </div>
          <div className="info-container">
              <AboutInfo></AboutInfo>
              <Experience></Experience>
              <Projects></Projects>
          </div>
      </div>
      <LanguageSwitcher></LanguageSwitcher>
      <ButtonTop></ButtonTop>
    </>
  )
}

export default Home