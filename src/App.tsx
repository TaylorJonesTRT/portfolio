import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Header from './components/Header';
import './styles/App.css';

const App = () => (
  <div className="App">
    <Header />
    <div className="body">
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
