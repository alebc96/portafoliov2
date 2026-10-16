import Experience from '../interfaces/experience'

export type Language = 'en' | 'es'

export interface Translation {
  nav: {
    about: string
    experience: string
    projects: string
  }
  mainInfo: {
    title: string
    about: string
  }
  about: {
    heading: string
    text: string
  }
  experience: {
    heading: string
    items: Experience[]
  }
  projects: {
    heading: string
  }
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      about: 'ABOUT',
      experience: 'EXPERIENCE & TRAINING',
      projects: 'PROJECT',
    },
    mainInfo: {
      title: 'Software Engineer',
      about: 'I build accessible and digital experiences for the web',
    },
    about: {
      heading: 'ABOUT ME',
      text: "I chose computer engineering, uncovering an exciting world where boredom is rare. Web development captivated me, driven by my fascination with the internet and its technologies. I've worked freelance and as a developer post-graduation, but my thirst for knowledge led me to Spain. Now, I'm immersed in learning each day. 😄",
    },
    experience: {
      heading: 'EXPERIENCE & TRAINING',
      items: [
        {
          date_range: '2023 - Present',
          name: 'Fullstack Web Developer - Sagasoluciones',
          description: 'Fullstack web developer providing web consulting services. I have developed several client applications end to end, carried out analysis for web development projects, and implemented data migrations with Python, working within an Azure environment.',
          extra: ['XML', 'Java', 'JavaScript', 'HTML', 'OpenCms', 'Web Consulting', 'Python', 'Azure', 'Docker'],
        },
        {
          date_range: '2022 - 2023',
          name: "University of Seville - Master's in Cloud Software Engineering, Data, and GT, Seville, Spain.",
          description: 'Pursuing the Cloud Engineering specialization, notable subjects include: Software as Microservices, Software as a Service Architecture, Client Technologies, Operations and Service Deployment, Machine Learning, Mobile Technologies.',
          extra: ['Docker', 'NodeJS', 'AngularJs', 'ReactJs', 'MongoDB', 'Android Studio', 'Machine Learning', 'Python'],
        },
        {
          date_range: '2021 - 2022',
          name: 'Freelance Layout Designer',
          description: 'I worked for a while as a component layout designer in ReactJS, where my role was to translate Figma designs into HTML, CSS, and JavaScript code.',
          extra: ['ReactJs', 'CSS', 'JSX', 'Bootstrap'],
        },
        {
          date_range: '2020 - 2022',
          name: 'Computer Engineer',
          description: 'Worked as a computer engineer in a postal company, holding the position of junior developer in the internal management system models using AngularJS and NodeJs, in addition to being a network administrator.',
          extra: ['AngularJs', 'CSS', 'HTML', 'Bootstrap', 'NodeJs', 'MySQL'],
        },
        {
          date_range: '2015 - 2020',
          name: 'University Studies: Computer Engineering.',
          description: 'University degree focused on software engineering, highlighted subjects: Object-Oriented Programming, Web Programming, Databases, Artificial Intelligence, Discrete Mathematics, Digital Image Processing.',
          extra: ['POO', 'Web Programming', 'Relational Databases'],
        },
      ],
    },
    projects: {
      heading: 'PROJECTS',
    },
  },
  es: {
    nav: {
      about: 'SOBRE MÍ',
      experience: 'EXPERIENCIA Y FORMACIÓN',
      projects: 'PROYECTOS',
    },
    mainInfo: {
      title: 'Ingeniero de Software',
      about: 'Construyo experiencias digitales y accesibles para la web',
    },
    about: {
      heading: 'SOBRE MÍ',
      text: 'Elegí la ingeniería informática y descubrí un mundo apasionante en el que el aburrimiento es raro. El desarrollo web me cautivó, impulsado por mi fascinación por internet y sus tecnologías. He trabajado como freelance y como desarrollador tras graduarme, pero mi sed de conocimiento me trajo a España. Ahora estoy inmerso en aprender cada día. 😄',
    },
    experience: {
      heading: 'EXPERIENCIA Y FORMACIÓN',
      items: [
        {
          date_range: '2023 - Presente',
          name: 'Desarrollador Web Fullstack - Sagasoluciones',
          description: 'Desarrollador web fullstack ofreciendo servicios de consultoría web. He desarrollado varias aplicaciones de clientes de principio a fin, realizado análisis para proyectos de desarrollo web e implementado migraciones de datos con Python, trabajando en un entorno de Azure.',
          extra: ['XML', 'Java', 'JavaScript', 'HTML', 'OpenCms', 'Consultoría Web', 'Python', 'Azure', 'Docker'],
        },
        {
          date_range: '2022 - 2023',
          name: 'Universidad de Sevilla - Máster en Ingeniería de Software en la Nube, Datos y GT, Sevilla, España.',
          description: 'Cursando la especialización en Ingeniería de la Nube, asignaturas destacadas: Software como Microservicios, Arquitectura Software como Servicio, Tecnologías de Cliente, Operación y Despliegue de Servicios, Aprendizaje Automático, Tecnologías Móviles.',
          extra: ['Docker', 'NodeJS', 'AngularJs', 'ReactJs', 'MongoDB', 'Android Studio', 'Aprendizaje Automático', 'Python'],
        },
        {
          date_range: '2021 - 2022',
          name: 'Diseñador de Maquetación Freelance',
          description: 'Trabajé durante un tiempo como diseñador de maquetación de componentes en ReactJS, donde mi labor era traducir diseños de Figma a código HTML, CSS y JavaScript.',
          extra: ['ReactJs', 'CSS', 'JSX', 'Bootstrap'],
        },
        {
          date_range: '2020 - 2022',
          name: 'Ingeniero Informático',
          description: 'Trabajé como ingeniero informático en una empresa postal, desempeñando el puesto de desarrollador junior en los modelos del sistema de gestión interno con AngularJS y NodeJs, además de administrador de red.',
          extra: ['AngularJs', 'CSS', 'HTML', 'Bootstrap', 'NodeJs', 'MySQL'],
        },
        {
          date_range: '2015 - 2020',
          name: 'Estudios Universitarios: Ingeniería Informática.',
          description: 'Título universitario enfocado en la ingeniería del software, asignaturas destacadas: Programación Orientada a Objetos, Programación Web, Bases de Datos, Inteligencia Artificial, Matemática Discreta, Procesamiento Digital de Imágenes.',
          extra: ['POO', 'Programación Web', 'Bases de Datos Relacionales'],
        },
      ],
    },
    projects: {
      heading: 'PROYECTOS',
    },
  },
}
