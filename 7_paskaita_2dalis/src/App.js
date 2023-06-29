// importas is react
import React from "react";
import { createContext } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
// Sukuriamas context kintamasis su pradine reikšme createContext(themes.light)
// exportuojamas, kad galėtume naudoti kituose failuose
export const ThemeContext = createContext(themes.light);

export default App;
