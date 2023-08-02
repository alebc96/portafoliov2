import './Projects.css'
import movieImg from '../../assets/movies.png'
import comprasImg from '../../assets/comprass.png'
import ecommerceMUI from '../../assets/ecommerce01.png'
import ecommerceBW from '../../assets/ecommerce.png'
import ProjectCard from "../project-card/ProjectCard"
import Project from '../../interfaces/project'

const projects: Project[] = [
  {
    image: movieImg,
    name: 'Fakeflix App',
    link: 'https://fakeflix-tmdb.netlify.app',
    description: 'Fakeflix is a SPA created with AngularJS and the TMDB API, where you can list movies of different genres, filter by name, and view details such as popularity, release date, and reviews for each movie. It leverages AngularJS routing, reactive forms, Observables, and other related AngularJS technologies.',
    tecs: ['AngularJs', 'CSS', 'HTML', 'TypeScript']
  },
  {
    image: ecommerceBW,
    name: 'ECommerce Black and Withe',
    link: 'https://bandwstore.netlify.app',
    description: "Ecommerce is a SPA created in AngularJS where a series of products are listed, and their details can be viewed. Users can add products to a shopping cart where they can later proceed to checkout, add more items, or make payments for the products. The application includes an authentication system (Firebase Auth) where the admin can add more products. JSON server is used to store the store's information, and it is hosted on a NodeJs server. This server acts as a mock API, created for testing and personal study purposes.",
    tecs: ['AngularJs', 'CSS', 'HTML', 'TypeScript', 'NodeJs', 'Firebase', 'Bootstrap']
  },
  {
    image: ecommerceMUI,
    name: 'MUI ecommerce',
    link: 'https://material-store.netlify.app',
    description: 'It is an e-commerce website where an API is used to display a list of products with functionalities such as filtering by categories, prices, ascending and descending orders, and the ability to modify the number of columns, among other features. The website is developed using AngularJS and Material UI. It includes a cart management system, allowing users to easily and intuitively add or remove products from their cart.',
    tecs: ['AngularJs', 'CSS', 'HTML', 'TypeScript', 'MUI']
  },
  {
    image: comprasImg,
    name: 'Comprass App',
    link: 'https://comprassapp.netlify.app',
    description: 'ComprasApp is a web service developed with the aim of creating a user account by registering on Firebase and generating lists of products to buy for a week. Users can add new lists and add products to them, which can be deleted or modified. The application was built using AngularJS, and for the server, NodeJs was used with a non-relational MongoDB database hosted on Atlas. It is a simple CRUD (Create, Read, Update, Delete) application with basic functionalities of POST, GET, DELETE, PUT, created with the purpose of learning and practice.',
    tecs: ['AngularJs', 'CSS', 'HTML', 'TypeScript', 'Bootstrap', 'Firebase', 'NodeJS', 'MongoDB']
  }
]

const Projects = () => {
  return (
    <div className="projects-container" id='projects'>
        <h4> PROJECTS </h4>
        <div className="container-fluid">
            {projects.map( (project) => (
              <ProjectCard project = {project} key={project.name}/>
            ))}
        </div>
    </div>
  )
}

export default Projects