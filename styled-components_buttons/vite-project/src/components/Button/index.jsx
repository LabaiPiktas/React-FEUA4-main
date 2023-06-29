import { StyledButton } from "./style";

// eslint-disable-next-line react/prop-types
function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
