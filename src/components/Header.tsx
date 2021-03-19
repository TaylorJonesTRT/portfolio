import React from 'react';

const Header = () => (
  <div className="hor-header">
    <div className="logo-area">
      <h1>Taylor Jones</h1>
      <ul className="hor-navigation">
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
