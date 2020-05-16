import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cellDataType from '../../0atom/table/cellDataType';
import TableCell from '../../0atom/table/TableCell';

const StyledTableRow = styled.div`
  display: table-row;
  background-color: ${(props) =>
    props.rowIndex % 2 === 1 ? '#627ca588' : '#779cab'};
  border: 2px solid 35524a;
  border-radius: 3px;
`;

function TableRow({ rowIndex, dataRow, columnConfigs }) {
  return (
    // TODO: fix key assignment - do we need the key here?
    // eslint-disable-next-line react/no-array-index-key
    <StyledTableRow rowIndex={rowIndex + 1} key={rowIndex}>
      {dataRow.map((value, cellIndex) => (
        <TableCell
          // TODO: fix key assignment
          // eslint-disable-next-line react/no-array-index-key
          key={cellIndex}
          columnType={columnConfigs[cellIndex].type}
          content={value}
        />
      ))}
    </StyledTableRow>
  );
}

TableRow.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  dataRow: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  columnConfigs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(Object.values(cellDataType)),
    })
  ).isRequired,
};

export default TableRow;
