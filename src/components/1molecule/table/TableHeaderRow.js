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

function TableHeaderRow({ tableHeaders, columnConfigs }) {
    return (
        <StyledTableHeaderRow>
            {tableHeaders.map(({ text, onClick }, index) => (
                <TableCell
                    key={text}
                    columnType={columnConfigs[index]}
                    content={text}
                    onClick={onClick}
                />
            ))}
        </StyledTableHeaderRow>
    );
}

TableHeaderRow.propTypes = {
    tableHeaders: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            onClick: PropTypes.func,
        })
    ).isRequired,
    columnConfigs: PropTypes.arrayOf(
        PropTypes.oneOf(Object.values(cellDataType))
    ).isRequired,
};

export default TableHeaderRow;
