import { styled } from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
`;

export const StyledTableHead = styled.thead`
  th {
    border-bottom: 2px solid #dbdbdb;
    padding: 0.5em 0.75em;
    vertical-align: top;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 700;
    color: ${(props) => props.theme.palette.dark};
    text-align: left;
  }
`;

export const StyledTableBody = styled.tbody`
  tr {
    cursor: ${(props) => (props.rowclickaction ? 'pointer' : 'initial')};
  }

  td {
    border-bottom: 1px solid #dbdbdb;
    padding: 0.5em 0.75em;
    vertical-align: top;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 400;
    color: ${(props) => props.theme.palette.dark};
    text-align: left;
  }

  tr:last-child {
    td {
      border-bottom-width: 0px;
    }
  }
`;

export const StyledTableFooter = styled.thead`
  th {
    border-top: 2px solid #dbdbdb;
    padding: 0.5em 0.75em;
    vertical-align: top;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 700;
    color: ${(props) => props.theme.palette.dark};
    text-align: left;
  }
`;
