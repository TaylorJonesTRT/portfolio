import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './styles/App.css';

const App = () => (
  <div className="App">
    <div className="left-side">
      <div className="header">
        <h1>Taylor Jones</h1>
        <h2>Fullstack TypeScript Developer</h2>
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
    <div className="right-side">
      <p>I&apos;m Taylor</p>
      <p>I like horror movies and TypeScript</p>
      <p>I love to make mobile first web applications with React.</p>
      <p>
        Currently for hire | <a href="mailto:taylor@taylorwjones.com">taylor@taylorwjones.com</a>
      </p>
      <div className="social">
        <div className="icon">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </div>
      </div>
    </div>
  </div>
);

export default App;
