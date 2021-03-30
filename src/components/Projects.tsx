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
        'This website you are on right now is written mobile first. The website was bootstraped by create-react-app. I took advantage of FontAwesomes icons on the homepage and here on the projects page with the language badges shown above every project. The wep app itself is built using ReactJS and functional components. It utilizes react-router to serve multiple "pages" on a single page application. In the future (soon) it will be transitioned to NextJS and have a backend setup with Node to power a blog system with a fully featured admin panel.',
    },
    {
      name: 'Memory Game',
      image: memoryGameImg,
      description:
        'The puprose of the game is to continously choose a card that you have not already selected (after each choice the cards on the screen reload and change). I created this project as a way to help deepen my knowledge in functional components and hooks and how to use them. I took advantage of the useEffect hook by having it check to see when a players best score would update (the best score only updates when a round ends by choosing a card that has already been selected) and so that I could reset the game by setting the current score to zero and reverting back the array in state that holds all of the cards that have been selected.',
    },
    {
      name: 'CV Application',
      image: cvAppImg,
      description:
        'This CV Application was my first time taking on ReactJS. It was initially built with class based components to figure out how state operates in React and how forms and their inputs are handled in state as well. Later it was refactored to use only functional components as a way to continue to see how React works and how hooks work and are used.',
    },
    {
      name: 'Weather App',
      image: weatherAppImg,
      description:
        'I built this Weather App to learn how to work with APIs for the first time in Javascript while also diving into leraning how to also create asynchronous code. You can enter in any location to get the that locations current weather. You can also choose to have it displayed in celsius or fahrenheit.',
    },
    {
      name: 'ToDO',
      image: todoAppImg,
      description:
        'ToDO is a minimalist task manager. With it you can create projects or todo lists to keep items organized. In said projects you can then create items that can have a due date set (or not), an importance level, and a descripiton. I built ToDO to help understand and fully grasp how to start and plan out a project with a OOP first mindset. It utilizes item and project models to create new ones of each with unique IDs. It also takes advantage of your browsers localStorage so that your projects and items will be saved and shown again on return as long as you are on the same browser and you have not reset your browsers localStorage.',
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
