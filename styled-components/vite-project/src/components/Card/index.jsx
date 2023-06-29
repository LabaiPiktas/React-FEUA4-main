import {
  StyledCardWrapper,
  StyledCardHeaderContainer,
  StyledCardHeader,
  StyledDivider,
  StyledCardContentContainer,
  StyledCardContentHeader,
  StyledCardContentParagraph,
} from "./style";
import PropTypes from "prop-types";

const Card = ({ color }) => {
  let cardTitle = "";
  let cardHeaderTitle = "";
  let textColor = "";

  switch (color) {
    case "blue":
      cardTitle = "Primary card title";
      cardHeaderTitle = "Header";
      textColor = "white";
      break;
    case "gray":
      cardTitle = "Secondary card title";
      cardHeaderTitle = "Header";
      textColor = "white";
      break;
    case "green":
      cardTitle = "Success card title";
      cardHeaderTitle = "Header";
      textColor = "white";
      break;
    case "red":
      cardTitle = "Danger card title";
      cardHeaderTitle = "Header";
      textColor = "white";
      break;
    case "gold":
      cardTitle = "Warning card title";
      cardHeaderTitle = "Header";
      textColor = "black";
      break;
    case "azure":
      cardTitle = "Info card title";
      cardHeaderTitle = "Header";
      textColor = "black";
      break;
    case "white":
      cardTitle = "Lite card title";
      cardHeaderTitle = "Header";
      textColor = "black";
      break;
    case "black":
      cardTitle = "Dark card title";
      cardHeaderTitle = "Header";
      textColor = "white";
      break;
    default:
      cardTitle = "Card title";
      cardHeaderTitle = "Header";
      textColor = "black";
      break;
  }

  return (
    <StyledCardWrapper color={color}>
      <StyledCardHeaderContainer>
        <StyledCardHeader textColor={textColor}>
          {cardHeaderTitle}
        </StyledCardHeader>
      </StyledCardHeaderContainer>
      <StyledDivider></StyledDivider>
      <StyledCardContentContainer>
        <StyledCardContentHeader textColor={textColor}>
          {cardTitle}
        </StyledCardContentHeader>
        <StyledCardContentParagraph textColor={textColor}>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </StyledCardContentParagraph>
      </StyledCardContentContainer>
    </StyledCardWrapper>
  );
};

Card.propTypes = {
  color: PropTypes.oneOf([
    "blue",
    "gray",
    "green",
    "red",
    "gold",
    "azure",
    "white",
    "black",
  ]),
};

export default Card;
