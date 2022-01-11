import React from 'react';
import Header from './Header';
import movieMatchImg from '../images/projects/moviematch.webp';
import portfolioHomeImg from '../images/projects/portfolio-home.webp';
import memoryGameImg from '../images/projects/memorygameapp.webp';
import cvAppImg from '../images/projects/cvapp.webp';
import weatherAppImg from '../images/projects/weatherapp.webp';
import todoAppImg from '../images/projects/todoapp.webp';

const Projects = () => {
  const projects = [
    // todo: add the rest of the projects to the this array
    // todo: capture portfolio worthy screenshots of the projects
    {
      name: 'MovieMatch',
      image: movieMatchImg,
      description:
        'MovieMatch solves the never-ending crisis of deciding what to watch. This product makes it easier to find something to watch by introducing movies that are fresh, and interesting.',
      github_link: 'https://github.com/TaylorJonesTRT/MovieMatch',
    },
    {
      name: 'My Personal Portfolio',
      image: portfolioHomeImg,
      description:
        'This website you are on right now is written mobile first. The website was bootstraped by create-react-app. I took advantage of FontAwesomes icons on the homepage and here on the projects page with the language badges shown above every project. The wep app itself is built using ReactJS and functional components. It utilizes react-router to serve multiple "pages" on a single page application. In the future (soon) it will be transitioned to NextJS and have a backend setup with Node to power a blog system with a fully featured admin panel.',
      github_link: 'https://github.com/TaylorJonesTRT/portfolio',
    },
    {
      name: 'Memory Game',
      image: memoryGameImg,
      description:
        'Test your memory! Choose a card, then memorize which you chose while the board is shuffled. Try to avoid choosing the same card again! See how high you can score!',
      github_link: 'https://github.com/TaylorJonesTRT/memory-game',
    },
    {
      name: 'CV Application',
      image: cvAppImg,
      description:
        'This CV Application was my first time taking on ReactJS. It was initially built with class based components to figure out how state operates in React and how forms and their inputs are handled in state as well. Later it was refactored to use only functional components as a way to continue to further understand React and to better understand hooks.',
      github_link: 'https://github.com/TaylorJonesTRT/cv-application-react',
    },
    {
      name: 'Weather App',
      image: weatherAppImg,
      description:
        'I built this Weather App to learn how to work with APIs for the first time in Javascript while also diving into leraning how to also create asynchronous code. You can enter in any location to get that locations current weather. You can also choose to have it displayed in celsius or fahrenheit.',
      github_link: 'https://github.com/TaylorJonesTRT/weather-app',
    },
    {
      name: 'ToDO',
      image: todoAppImg,
      description:
        'ToDO helps to solve a problem everyone has come across, managing their day/week/time all together. This app separates different types of lists, while making it easy to organize.',
      github_link: 'https://github.com/TaylorJonesTRT/todo-list',
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
              <a href={project.github_link}>
                <h2>{project.name}</h2>
              </a>
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
