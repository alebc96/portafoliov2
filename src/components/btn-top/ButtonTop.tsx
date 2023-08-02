import './ButtonTop.css'

export const ButtonTop = () => {

const scrollToTop = () => {
    const section = document.getElementById('about')
    if(section){
     section.scrollIntoView({behavior: 'smooth'})
    }
};

  return (
    <div className='btn-container'>
        <button onClick={ () => scrollToTop() }><i className="bi bi-arrow-up-short"></i></button>
    </div>
  )
}
