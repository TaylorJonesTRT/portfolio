import React from 'react';
import Header from './Header';

const Projects = () => {
  const projects = [
    {
      name: 'Portfolio',
      image: 'testimg',
      languages: 'TypeScript, React, HTML/CSS',
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="body">
        <h1>Projects</h1>
        <span>{projects[0].name}</span>
      </div>
    </div>
  );
};

export default Projects;
