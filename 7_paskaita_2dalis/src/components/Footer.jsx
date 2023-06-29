import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Button from './Button';

const Footer = () => {
  const { theme, toggleDarkMode } = useContext(ThemeContext);

  const footerStyle = {
    backgroundColor: theme.background,
    color: theme.foreground,
    padding: '20px',
    textAlign: 'center',
  };

  const buttonStyle = {
    background: theme.foreground,
    color: theme.background,
   padding: '10px',
   borderRadius: '5px',
  };

  return (
    <footer style={footerStyle}>
      <h3>Footer</h3>
      <Button text={'Toggle Theme'} onClick={toggleDarkMode} style={buttonStyle} />
    </footer>
  );
};

export { Footer } ;
