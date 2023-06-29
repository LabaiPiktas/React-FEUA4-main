import PropTypes from "prop-types";

import {
  StyledCardWrapper,
  StyledCardHeaderContainer,
  StyledCardHeader,
  StyledDivider,
  StyledCardContentContainer,
  StyledCardContentHeader,
  StyledCardContentParagraph,
} from "./style";

const Card = ({ subtitle, title, content, color, outline, fullwidth }) => {
  return (
    <StyledCardWrapper color={color} fullwidth={fullwidth ? "true" : ""}>
      <StyledCardHeaderContainer color={color} outline={outline ? "true" : ""}>
        <StyledCardHeader outline={outline ? "true" : ""}>
          {subtitle}
        </StyledCardHeader>
      </StyledCardHeaderContainer>
      <StyledDivider></StyledDivider>
      <StyledCardContentContainer outline={outline ? "true" : ""} color={color}>
        <StyledCardContentHeader>{title}</StyledCardContentHeader>
        <StyledCardContentParagraph>{content}</StyledCardContentParagraph>
      </StyledCardContentContainer>
    </StyledCardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  outline: PropTypes.string.isRequired,
  fullwidth: PropTypes.string.isRequired,
};
export default Card;
