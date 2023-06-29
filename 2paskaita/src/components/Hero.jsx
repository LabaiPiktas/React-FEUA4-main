import PropTypes from 'prop-types';
import './Hero.css';

const Hero = ({ title, subtitle }) => {
  return (
    <div className="hero">
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;
