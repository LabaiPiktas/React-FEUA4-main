const TableRowSelect = ({ render }) => {
  const selectRow = (e) => {
    const row = e.target.parentElement;
    const styles = getComputedStyle(row);

    if (styles.backgroundColor === 'rgb(68, 209, 177)') {
      row.style.backgroundColor = 'rgb(255,255,255)';
    } else {
      row.style.backgroundColor = 'rgb(68, 209, 177)';
    }
  };

  return render(selectRow);
};

export default TableRowSelect;
