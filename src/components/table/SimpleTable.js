import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TableCell from './TableCell';
import cellDataType from './cellDataType';

const Header = styled.h2`
    font-size: 1.5em;
`;

const Table = styled.div`
    width: max-content;
    display: table;
    background-color: lightgrey;
    overflow: hidden;
    border-radius: 15px;
    border-width: 5px;
    border-style: solid;
    border-collapse: separate;
    border-spacing: 5px 3px;
    line-height: 2;
`;

const TableHeaderRow = styled.div`
    display: table-row;
    font-size: 1.2em;
    background-color: #be8595;
    border-radius: 20px;
    font-weight: bold;
    color: rgba(0, 128, 0, 1);
    line-height: 2;
    white-space: nowrap;
`;

const StyledTableRow = styled.div`
    display: table-row;
    background-color: ${(props) =>
        props.rowIndex % 2 === 1 ? '#adbe85' : '#5f8059'};
    border: 2px solid lightgrey;
    border-radius: 3px;
`;

function SimpleTable({ title, columnConfigs, tableHeaders, dataRows }) {
    if (dataRows.length !== 0) {
        const hasNotEqualConfigsAndHeaders =
            columnConfigs.length !== tableHeaders.length;
        const hasNotEqualConfigAndRows =
            columnConfigs.length !== dataRows[0].length;
        if (hasNotEqualConfigsAndHeaders || hasNotEqualConfigAndRows) {
            // does not catch all errors but its good enough for simple ones
            throw new Error(
                `Error, received ${columnConfigs.length} column configs, ${tableHeaders.length} headers and ${dataRows[0].length} rows`
            );
        }
    }

    return (
        <div>
            <Header>{title}</Header>
            <Table>
                <TableHeaderRow>
                    {tableHeaders.map(({ text, onClick }, index) => (
                        <TableCell
                            key={text}
                            columnType={columnConfigs[index]}
                            content={text}
                            onClick={onClick}
                        />
                    ))}
                </TableHeaderRow>
                {dataRows.map((dataRow, rowIndex) => (
                    // TODO: fix key assignment
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
                ))}
            </Table>
        </div>
    );
}

SimpleTable.propTypes = {
    title: PropTypes.string.isRequired,
    columnConfigs: PropTypes.arrayOf(
        PropTypes.oneOf(Object.values(cellDataType))
    ).isRequired,
    tableHeaders: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            onClick: PropTypes.func,
        })
    ).isRequired,
    dataRows: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        )
    ).isRequired,
};

export default SimpleTable;
