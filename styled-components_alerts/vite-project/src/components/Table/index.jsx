import {
  StyledTable,
  StyledTableHead,
  StyledTableBody,
  StyledTableFooter,
} from './style';

const Table = ({ data = [], rowClickAction }) => {
  const tableHeadData = data.reduce((total, item) => {
    Object.keys(item).forEach((x) => {
      if (!total.includes(x)) {
        total.push(x);
      }
    });

    return total;
  }, []);

  const tableBodyData = data.reduce((total, item) => {
    const tableRowData = tableHeadData.map((x) => {
      for (let j in item) {
        if (x === j) {
          return item[j];
        }
      }
      return '';
    });

    total.push(tableRowData);

    return total;
  }, []);

  return (
    <StyledTable>
      <StyledTableHead>
        <tr>
          {tableHeadData.map((x, i) => (
            <th key={i}>{x.charAt(0).toUpperCase() + x.slice(1)}</th>
          ))}
        </tr>
      </StyledTableHead>
      <StyledTableBody rowclickaction={rowClickAction ? 'rowClickAction' : ''}>
        {tableBodyData.map((x, i) => (
          <tr key={i} onClick={rowClickAction}>
            {x.map((j, index) => (
              <td key={index}>{j}</td>
            ))}
          </tr>
        ))}
      </StyledTableBody>
      <StyledTableFooter>
        <tr>
          {tableHeadData.map((x, i) => (
            <th key={i}>{x.charAt(0).toUpperCase() + x.slice(1)}</th>
          ))}
        </tr>
      </StyledTableFooter>
    </StyledTable>
  );
};

export default Table;
