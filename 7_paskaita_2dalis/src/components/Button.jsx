import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Button = ({ text, onClick, style }) => {
  const theme = useContext(ThemeContext);

  const buttonStyle = {
    background: theme.background,
    color: theme.foreground,
    ...style, // Merge custom style with theme-based style
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
