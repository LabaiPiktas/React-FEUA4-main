import styled from 'styled-components';

const colorStyles = {
  blue: {
    background: 'blue',
    textColor: 'white',
  },
  gray: {
    background: 'gray',
    textColor: 'white',
  },
  green: {
    background: 'green',
    textColor: 'white',
  },
  red: {
    background: 'red',
    textColor: 'white',
  },
  gold: {
    background: 'gold',
    textColor: 'black',
  },
  azure: {
    background: '#00ffff',
    textColor: 'black',
  },
  white: {
    background: 'white',
    textColor: 'black',
  },
  black: {
    background: 'black',
    textColor: 'white',
  },
};

export const StyledCardWrapper = styled.div`
  background-color: ${({ color }) => colorStyles[color]?.background || 'white'};
  color: ${({ color }) => colorStyles[color]?.textColor || 'black'};
  width: 300px;
  margin: 16px;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledCardHeaderContainer = styled.div``;

export const StyledCardHeader = styled.h5`
  margin-bottom: 8px;
  font-size: 18px;
`;

export const StyledDivider = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 16px 0;
`;

export const StyledCardContentContainer = styled.div``;

export const StyledCardContentHeader = styled.h4`
  margin-bottom: 8px;
  font-size: 16px;
`;

export const StyledCardContentParagraph = styled.p`
  font-size: 14px;
`;
