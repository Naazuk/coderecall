// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header" style={{backgroundColor: "#060d1b;"}}>
      <nav className="navbar">
        <div className="logo">
          <h1>CodeRecall</h1>
        </div>
        {/* <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/connect">Connect</Link></li>
          <li><Link to="/frontend">Frontend</Link></li>
          <li><Link to="/backend">Backend</Link></li>
          <li><Link to="/framework">Frameworks</Link></li>
        </ul> */}
        <div className="auth-links">
          <button onClick={() => window.location.href = '/signup'}>SignUp</button>
          <button onClick={() => window.location.href = '/login'}>Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
