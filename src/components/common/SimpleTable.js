import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const TableRow = styled.div`
  display: table-row;
  background-color: ${props => props.rowIndex % 2 === 1 ? 'powderblue' : 'bisque'};
  border: 2px solid lightgrey;
  border-radius: 3px;
`;

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




const SimpleTable = ({ title, columnConfigs, tableHeaders, dataRows }) => {
  if(dataRows.length !== 0){
    const hasNotEqualConfigsAndHeaders = columnConfigs.length !== tableHeaders.length;
    const hasNotEqualConfigAndRows = columnConfigs.length !== dataRows[0].length;
    if(hasNotEqualConfigsAndHeaders || hasNotEqualConfigAndRows) {
        // does not catch all errors but its good enough for simple ones
      throw new Error(`Error, received ${columnConfigs.length} column configs, ${tableHeaders.length} headers and ${dataRows[0].length} rows`);
    }
  }

  const mapContentToRow = (content, index, onClick = () => {}) => {
    const columnType = columnConfigs[index];
    switch(columnType) {
      case supportedDataTypes.numberShort:
        return <NumberTableCell onClick={onClick}>{content}</NumberTableCell>;
      case supportedDataTypes.stringLong:
        return <NameTableCell onClick={onClick}>{content}</NameTableCell>;
      default:
        throw new Error('unsupported type: ' + columnType);
    }
  };

  return(
    <div>
      <Header>{title}</Header>
      <Table>
        <TableHeaderRow rowIndex={0}>
          {tableHeaders.map(({text, onClick}, index) => mapContentToRow(text, index, onClick))}
        </TableHeaderRow>
        {dataRows.map((dataRow, index) => {
          return (
            <TableRow rowIndex={index+1}>
              {dataRow.map((value, index) => mapContentToRow(value, index))}
            </TableRow>
          );
        })}
      </Table>
    </div>
  );
};

const supportedDataTypes = {
  stringLong: 'stringLong',
  numberShort: 'numberShort',
}

SimpleTable.supportedDataTypes = supportedDataTypes;

SimpleTable.propTypes = {
    title: PropTypes.string.isRequired,
    columnConfigs: PropTypes.arrayOf(PropTypes.oneOf(Object.values(supportedDataTypes))),
    tableHeaders: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })).isRequired,
    dataRows: PropTypes.arrayOf(PropTypes.array).isRequired,
}

export default SimpleTable;