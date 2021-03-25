import React from 'react';
import Header from './Header';
import portfolioHomeImg from '../images/projects/portfolio-home.png';
import memoryGameImg from '../images/projects/memorygameapp.png';
import cvAppImg from '../images/projects/cvapp.png';
import weatherAppImg from '../images/projects/weatherapp.png';
import todoAppImg from '../images/projects/todoapp.png';

const Projects = () => {
  const projects = [
    // todo: add the rest of the projects to the this array
    // todo: capture portfolio worthy screenshots of the projects
    {
      name: 'Portfolio',
      image: portfolioHomeImg,
      description:
        'This website you are on right now is written mobile first. The website was bootstraped by create-react-app. I took advantage of FontAwesomes icons on the homepage and here on the projects page with the language badges shown above every project. The wep app itself is built using ReactJS and functional components.',
    },
    {
      name: 'Memory Game',
      image: memoryGameImg,
      description: 'test',
    },
    {
      name: 'CV Application',
      image: cvAppImg,
      description: 'test',
    },
    {
      name: 'Weather App',
      image: weatherAppImg,
      description: 'test',
    },
    {
      name: 'ToDO',
      image: todoAppImg,
      description: 'test',
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="body">
        <div className="projects">
          <h1>Projects</h1>
          {projects.map((project) => (
            <div className="project" key={project.name}>
              <h2>{project.name}</h2>
              <div className="break" />
              <img src={project.image} alt={project.name} />
              <div className="break" />
              <p className="project-desc">{project.description}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
