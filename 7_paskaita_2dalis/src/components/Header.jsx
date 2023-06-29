import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
    const { theme } = useContext(ThemeContext);

    const headerStyle = {
        backgroundColor: theme.background,
        color: theme.foreground,
        padding: "20px",
        textAlign: "center",
      };

    return (
    <header style={headerStyle}>
        <h1>Header</h1>
    </header>
    );
};

export { Header };