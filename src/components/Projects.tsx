import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Portfolio',
      image: 'testimg',
      languages: 'TypeScript, React, HTML/CSS',
    },
  ];

  return <h1>{projects[0].name}</h1>;
};

export default Projects;
