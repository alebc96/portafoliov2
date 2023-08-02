import './MainInfo.css'

const MainInfo = () => {


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
            <p className='p-title'>Software Engineer</p>
            <p className='p-about'>I build accessible and digital experiences for the web</p>
        </section>

        <section className="navegation-section">
            <ul>
                <li className='m-2' onClick={()=> handleNavigation('about')}> ABOUT </li>
                <li className='m-2' onClick={()=> handleNavigation('experience')}> EXPERIENCE & TRAINING </li>
                <li className='m-2' onClick={()=> handleNavigation('projects')}> PROJECT </li>
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