import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './styles/App.css';

const App = () => (
  <div className="Home-App">
    <div className="left-side">
      <div className="header">
        <h1>Taylor Jones</h1>
        <h2>Fullstack Developer</h2>
        <ul className="navigation">
          <li>
            <a href="/">Home</a>
          </li>
          -
          <li>
            <a href="/projects">Projects</a>
          </li>
          -
          <li>
            <a href="/Blog">Blog</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="home-body">
      <p>I&apos;m Taylor</p>
      <div className="break" />
      <p>I like horror movies and TypeScript</p>
      <div className="break" />
      <p>I love to make mobile first web applications with React.</p>
      <div className="break" />
      <p>
        Currently for hire - <a href="mailto:taylor@taylorwjones.com">taylor@taylorwjones.com</a>
      </p>
      <div className="break" />
      <div className="social">
        <div className="icon">
          <a href="https://github.com/TaylorJonesTRT" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.linkedin.com/in/taylor-jones-a850b812a/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default App;
