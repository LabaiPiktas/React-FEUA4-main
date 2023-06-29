import PropTypes from "prop-types";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

const theme = {
  palette: {
    light: {
      lite: "#f2f2f2",
      main: "#ffffff",
      dark: "#cccccc",
    },
    dark: {
      lite: "#333333",
      main: "#212529",
      dark: "#000000",
    },
    primary: {
      lite: "#79a7ff",
      main: "#2B6EFD",
      dark: "#0049b5",
    },
    secondary: {
      lite: "#8c959e",
      main: "#6C757D",
      dark: "#4b545c",
    },
    success: {
      lite: "#4bbf7c",
      main: "#288754",
      dark: "#1d5737",
    },
    danger: {
      lite: "#ff6d7a",
      main: "#DC3545",
      dark: "#b52933",
    },
    warning: {
      lite: "#ffdb84",
      main: "#F9C108",
      dark: "#c69306",
    },
    info: {
      lite: "#a6e6ff",
      main: "#44CAEF",
      dark: "#1992d6",
    },
  },
  sizes: {
    font: {
      lg: "1.25em",
      md: "1em",
    },
  },
};

const ThemeProvider = ({ children }) => (
  <StyledComponentsThemeProvider theme={theme}>
    {children}
  </StyledComponentsThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
