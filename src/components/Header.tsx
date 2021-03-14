import React from 'react';
import '../styles/Header.css';

const Header = () => (
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
);

export default Header;
