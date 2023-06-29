import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Content = () => {
    const { theme } = useContext(ThemeContext);

    const contentStyle = {
        backgroundColor: theme.foreground,
        color: theme.background,
        padding: "20px",
        margin: "1px 0",
        textAlign: "center",
      };

        return (
            <div style={contentStyle}>
            <h2>Content</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        );
    };

    export { Content};