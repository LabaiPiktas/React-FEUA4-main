import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

const theme = {
  palette: {
    light: '#ffffff',
    dark: '#212529',
    primary: '#2B6EFD',
    secondary: '#6C757D',
    success: '#288754',
    danger: '#DC3545',
    warning: '#F9C108',
    info: '#44CAEF',
  },
  sizes: {
    font: {
      lg: '1.25em',
      md: '1em',
    },
  },
};

const ThemeProvider = ({ children }) => (
  <StyledComponentsThemeProvider theme={theme}>
    {children}
  </StyledComponentsThemeProvider>
);

export default ThemeProvider;
