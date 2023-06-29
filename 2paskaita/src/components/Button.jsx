import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ title, variant }) => {
  const getButtonClassName = () => {
    switch (variant) {
      case "text":
        return "button-text";
      case "contained":
        return "button-contained";
      case "outlined":
        return "button-outlined";
      default:
        return "";
    }
  };

  return (
    <div className="button-container">
      <button className={`button ${getButtonClassName()}`}>
        {title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
};

export default Button;
