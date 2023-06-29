import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import imageSrc from './img/logo.jpg';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src={imageSrc} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Pagrindinis</Link>
          </li>
          <li>
            <Link to="/about">Apie mus</Link>
          </li>
          <li>
            <Link to="/news">Naujienos</Link>
          </li>
          <li>
            <Link to="/services">Paslaugos</Link>
          </li>
          <li>
            <Link to="/portfolio">Atlikti darbai</Link>
          </li>
          <li>
            <Link to="/contact">Kontaktai</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
