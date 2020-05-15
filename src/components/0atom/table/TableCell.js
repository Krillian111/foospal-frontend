import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cellDataType from './cellDataType';

const StyledTableCell = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    padding: 2px;
`;

const StyledNumberTableCell = styled(StyledTableCell)`
    width: 8%;
`;

const StyledNameTableCell = styled(StyledTableCell)`
    width: 30%;
`;

function TableCell({ columnType, content, onClick }) {
    switch (columnType) {
        case cellDataType.numberShort:
            return (
                <StyledNumberTableCell onClick={onClick}>
                    {content}
                </StyledNumberTableCell>
            );
        case cellDataType.stringLong:
            return (
                <StyledNameTableCell onClick={onClick}>
                    {content}
                </StyledNameTableCell>
            );
        default:
            throw new Error(`unsupported type: ${JSON.stringify(columnType)}`);
    }
}

StyledTableCell.propTypes = {
    columnType: PropTypes.oneOf(Object.values(cellDataType)).isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    onClick: PropTypes.func,
};

StyledTableCell.defaultProps = {
    onClick: () => {},
};

export default TableCell;
