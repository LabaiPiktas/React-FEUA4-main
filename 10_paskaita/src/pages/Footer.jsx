
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
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
      <p>Visos teisės saugomos &copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;
