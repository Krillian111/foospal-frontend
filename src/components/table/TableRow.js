import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cellDataType from './cellDataType';

const TableCell = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    padding: 2px;
`;

const NumberTableCell = styled(TableCell)`
    width: 8%;
`;

const NameTableCell = styled(TableCell)`
    width: 30%;
`;

export default function TableRow({ columnType, content, onClick }) {
    switch (columnType) {
        case cellDataType.numberShort:
            return (
                <NumberTableCell onClick={onClick}>{content}</NumberTableCell>
            );
        case cellDataType.stringLong:
            return <NameTableCell onClick={onClick}>{content}</NameTableCell>;
        default:
            throw new Error(`unsupported type: ${JSON.stringify(columnType)}`);
    }
}

TableRow.propTypes = {
    columnType: PropTypes.oneOf(Object.values(cellDataType)).isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func,
};

TableRow.defaultProps = {
    onClick: () => {},
};
