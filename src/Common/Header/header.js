import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
  return (
    <header id="header" style={{ textAlign: 'center' }}>
      <div id="head">
        <h1 id="logo">
          <span className="title">Emily-Huong Erskine</span>
          <br />
          <span className="tagline">
            UX/UI Designer | Researcher | Developer
            <br />
          </span>
        </h1>
      </div>

      <div className="navbar-collapse">
        <br />
        <ul className="nav" style={{ display: 'flex', justifyContent: 'center', padding: 0}}>
          <li className="active" style={{ margin: '0 15px' }}>
            <a href="/">Home</a>
          </li>
          <li style={{ margin: '0 15px' }}>
            <a href="/about">About</a>
          </li>
          <li style={{ margin: '0 15px' }}>
            <a href="/projects">Projects</a>
          </li>
          <li style={{ margin: '0 15px' }}>
            <a href="assets/images/eherskine.pdf" download>CV</a>
          </li>
        </ul>
        <br />
      </div>
      <br />
    </header>
  );
};
