import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TableCell from './TableCell';
import cellDataType from './cellDataType';

const StyledTableRow = styled.div`
    display: table-row;
    background-color: ${(props) =>
        props.rowIndex % 2 === 1 ? '#adbe85' : '#5f8059'};
    border: 2px solid lightgrey;
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
                    columnType={columnConfigs[cellIndex]}
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
        PropTypes.oneOf(Object.values(cellDataType))
    ).isRequired,
};

export default TableRow;
