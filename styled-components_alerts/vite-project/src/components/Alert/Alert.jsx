import PropTypes from "prop-types";
import { PALETTE } from "../../shared/theme/constants";

const Alert = ({ color, children }) => {
  const getColorStyle = () => {
    switch (color) {
      case PALETTE.light:
        return {
          backgroundColor: "#cccccc",
          color: "#f2f2f2",
          border: "2px solid #ffffff",
        };
      case PALETTE.dark:
        return {
          backgroundColor: "#000000",
          color: "#acacac",
          border: "2px solid #212529",
        };
      case PALETTE.primary:
        return {
          backgroundColor: "#00327c",
          color: "#79a7ff",
          border: "2px solid #2B6EFD",
        };
      case PALETTE.secondary:
        return {
          backgroundColor: "#4b545c",
          color: "#8c959e",
          border: "2px solid #6C757D",
        };
      case PALETTE.success:
        return {
          backgroundColor: "#1d5737",
          color: "#4bbf7c",
          border: "2px solid #288754",
        };
      case PALETTE.danger:
        return {
          backgroundColor: "#b52933",
          color: "#d76c77",
          border: "2px solid #DC3545",
        };
      case PALETTE.warning:
        return {
          backgroundColor: "#c69306",
          color: "#ffdb84",
          border: "2px solid #F9C108",
        };
      case PALETTE.info:
        return {
          backgroundColor: "#1992d6",
          color: "#a6e6ff",
          border: "2px solid #44CAEF",
        };
      default:
        return {};
    }
  };

  const alertStyle = {
    padding: "15px",
    margin: "5px",
    borderRadius: "4px",
    ...getColorStyle(),
  };

  return <div style={alertStyle}>{children}</div>;
};

Alert.propTypes = {
  color: PropTypes.oneOf(Object.values(PALETTE)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Alert;
