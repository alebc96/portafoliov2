import './Home.css'
import MainInfo from "../../components/main_info/MainInfo"
import AboutInfo from '../../components/about-info/AboutInfo'
import Experience from '../../components/experience/Experience'
import Projects from '../../components/projects/Projects'
import { ButtonTop } from '../../components/btn-top/ButtonTop'


const Home = () => {
  return (
    <>
      <div className="row w-100">
          <div className="col-lg">
              <MainInfo></MainInfo>
          </div>
          <div className="col-lg info-container">
              <AboutInfo></AboutInfo>
              <Experience></Experience>
              <Projects></Projects>
          </div>
      </div>
      <ButtonTop></ButtonTop>
    </>
  )
}

export default Home