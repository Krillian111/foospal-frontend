import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TableCell from '../../0atom/table/TableCell';
import cellDataType from '../../0atom/table/cellDataType';

const StyledTableHeaderRow = styled.div`
  display: table-row;
  font-size: 1.05em;
  background-color: #35524a;
  border-radius: 12px;
  font-weight: normal;
  color: #a2e8dd;
  line-height: 2;
  white-space: nowrap;
`;

function TableHeaderRow({ columnConfigs }) {
  return (
    <StyledTableHeaderRow>
      {columnConfigs.map(({ type, headerLabel, onHeaderClick }) => (
        <TableCell
          key={headerLabel}
          columnType={type}
          content={headerLabel}
          onClick={onHeaderClick}
        />
      ))}
    </StyledTableHeaderRow>
  );
}

TableHeaderRow.propTypes = {
  columnConfigs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(Object.values(cellDataType)),
      headerLabel: PropTypes.string.isRequired,
      onHeaderClick: PropTypes.func,
    })
  ).isRequired,
};

export default TableHeaderRow;
