import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TableRow from './TableRow';

const Header = styled.h2`
  font-size: 1.5em;
`;

const Table = styled.div`
  width: 100%;
  display: table;
  background-color: lightgrey;
`;

const TableHeaderRow = styled.div`
  display: table-row;
  background-color: lightcoral;
  border-radius: 20px; 
`;

const StyledTableRow = styled.div`
  display: table-row;
  background-color: ${props => props.rowIndex % 2 === 1 ? 'powderblue' : 'bisque'};
  border: 2px solid lightgrey;
  border-radius: 3px;
`;


function SimpleTable({ title, columnConfigs, tableHeaders, dataRows }) {
  if(dataRows.length !== 0){
    const hasNotEqualConfigsAndHeaders = columnConfigs.length !== tableHeaders.length;
    const hasNotEqualConfigAndRows = columnConfigs.length !== dataRows[0].length;
    if(hasNotEqualConfigsAndHeaders || hasNotEqualConfigAndRows) {
        // does not catch all errors but its good enough for simple ones
      throw new Error(`Error, received ${columnConfigs.length} column configs, ${tableHeaders.length} headers and ${dataRows[0].length} rows`);
    }
  }

  return(
    <div>
      <Header>{title}</Header>
      <Table>
        <TableHeaderRow>
          {tableHeaders.map(({text, onClick}, index) =>
            <TableRow
              key={index}
              columnType={columnConfigs[index]}
              content={text}
              onClick={onClick}
            />
          )}
        </TableHeaderRow>
        {dataRows.map((dataRow, index) => (
            <StyledTableRow rowIndex={index+1} key={index}>
              {dataRow.map((value, index) => 
                <TableRow 
                  key={index}
                  columnType={columnConfigs[index]} 
                  content={value} 
                />
              )}
            </StyledTableRow>
          ))}
      </Table>
    </div>
  );
};

SimpleTable.propTypes = {
    title: PropTypes.string.isRequired,
    columnConfigs: PropTypes.array.isRequired,
    tableHeaders: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })).isRequired,
    dataRows: PropTypes.arrayOf(PropTypes.array).isRequired,
}

export default SimpleTable;