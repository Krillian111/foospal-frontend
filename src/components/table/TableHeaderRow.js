import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TableCell from './TableCell';
import cellDataType from './cellDataType';

const StyledTableHeaderRow = styled.div`
    display: table-row;
    font-size: 1.2em;
    background-color: #be8595;
    border-radius: 20px;
    font-weight: bold;
    color: rgba(0, 128, 0, 1);
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
