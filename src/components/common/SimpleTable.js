import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TableRow from './TableRow';

const Header = styled.h2`
  font-size: 1.5em;
  /* was heißt em? */
`;

const Table = styled.div`
  width: max-content;
  /* hier wollen wir noch modifizieren - Spaltenbreite */
  display: table;
  background-color: lightgrey;
  overflow: hidden;
  border-radius: 15px;
  border-width: 5px;
  border-style: solid;
  /* grauer Rand außenrum */
  border-collapse: separate;
  border-spacing: 5px 3px;
  /* graue Linien zwischen den Zeilen / Spalten */
  line-height: 2;
  /* kann eigtl weg, wenn wir es geschafft haben, dass padding funktioniert */
  /*margin: 0 100px;*/
  /*rückt die Tabelle ein bisschen nach rechts ein - die null rückt sie um null nach unten*/
`;

const TableHeaderRow = styled.div`
  /* Überschriftenzeile in der Tabelle */
  display: table-row;
  font-size: 1.2em;
  background-color: #be8595;
  border-radius: 20px; 
  font-weight: bold;
  color: rgba(0, 128, 0, 1);
  line-height: 2;
  white-space: nowrap;
  /* kein Zeilenumbruch - dadurch Spalten breiter */;
  `;

const StyledTableRow = styled.div`
  /* Zeilen der Tabelle */
  display: table-row;
  background-color: ${props => props.rowIndex % 2 === 1 ? '#adbe85' : '#5f8059'};
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
/* sandra: was bedeutet diese function? */

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