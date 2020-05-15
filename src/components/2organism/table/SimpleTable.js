import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TableHeaderRow from '../../1molecule/table/TableHeaderRow';
import TableRow from '../../1molecule/table/TableRow';
import cellDataType from '../../0atom/table/cellDataType';

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

function SimpleTable({ title, columnConfigs, dataRows }) {
    if (dataRows.length !== 0) {
        const hasNotEqualConfigAndRows =
            columnConfigs.length !== dataRows[0].length;
        if (hasNotEqualConfigAndRows) {
            // does not catch all errors but its good enough for simple ones
            throw new Error(
                `Error, received ${columnConfigs.length} column configs and ${dataRows[0].length} rows`
            );
        }
    }

    return (
        <div>
            <Header>{title}</Header>
            <Table>
                <TableHeaderRow columnConfigs={columnConfigs} />

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
        PropTypes.shape({
            type: PropTypes.oneOf(Object.values(cellDataType)),
            headerLabel: PropTypes.string.isRequired,
            onHeaderClick: PropTypes.func,
        })
    ).isRequired,
    dataRows: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        )
    ).isRequired,
};

export default SimpleTable;
