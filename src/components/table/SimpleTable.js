import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cellDataType from './cellDataType';
import TableRow from './TableRow';
import TableHeaderRow from './TableHeaderRow';

const Header = styled.h2`
    font-size: 1.5em;
    color: #35524a;
    margin: 0px 20px;
`;

const Table = styled.div`
    width: max-content;
    display: table;
    background-color: #35524a;
    overflow: hidden;
    border-radius: 15px;
    border-width: 2px;
    border-style: solid;
    border-collapse: separate;
    border-color: #35524a;
    border-spacing: 1px 0px;
    line-height: 2;
    margin: 20px 20px;
`;

<<<<<<< HEAD
=======
const TableHeaderRow = styled.div`
    display: table-row;
    font-size: 1.05em;
    background-color: #35524a;
    border-radius: 12px;
    font-weight: normal;
    color: #a2e8dd;
    line-height: 2;
    white-space: nowrap;
`;

const StyledTableRow = styled.div`
    display: table-row;
    background-color: ${(props) =>
        props.rowIndex % 2 === 1 ? '#627ca588' : '#779cab'};
    border: 2px solid 35524a;
    border-radius: 3px;
`;

>>>>>>> Farbschema auf alles übernommen
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
                <TableHeaderRow
                    tableHeaders={tableHeaders}
                    columnConfigs={columnConfigs}
                />

                {dataRows.map((dataRow, rowIndex) => (
                    <TableRow
                        rowIndex={rowIndex + 1}
                        dataRow={dataRow}
                        columnConfigs={columnConfigs}
                        // TODO: fix key assignment
                        // eslint-disable-next-line react/no-array-index-key
                        key={rowIndex}
                    />
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
