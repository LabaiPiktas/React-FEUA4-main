import { styled } from "styled-components";
import { PALETTE } from "../../shared/theme/constants";

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  border: ${(props) =>
    props.outline ? `1px solid ${props.theme.palette[props.color]}` : "none"};
  background-color: ${(props) =>
    props.outline ? "transparent" : props.theme.palette[props.color]};
  color: ${(props) =>
    props.color === PALETTE.warning ||
    props.color === PALETTE.info ||
    props.color === PALETTE.light
      ? props.theme.palette.dark
      : props.outline
      ? props.theme.palette[props.color]
      : props.theme.palette.light};
  border-color: ${(props) => props.theme.palette[props.color]};
  font-size: ${(props) => props.theme.sizes.font.md};
  font-weight: 500;
  line-height: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.outline && props.color !== PALETTE.light
        ? props.theme.palette[props.color]
        : props.theme.palette.dark};
    color: ${(props) =>
      props.outline && props.color !== PALETTE.light
        ? props.theme.palette.dark
        : props.theme.palette.light};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.palette.secondary};
  }

  &:disabled {
    background-color: ${(props) => props.theme.palette.secondary};
    cursor: not-allowed;
  }
`;
