import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.h2`
  font-size: 1.5em;
`;

const Table = styled.div`
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
  width: 10%;
`;

const NameTableCell = styled(TableCell)`
  width: 40%;
`;


const PlayerStats = ({ title, playerStats }) => (
  <div>
    <Header>{title}</Header>
    <Table>
      <TableHeaderRow rowIndex={0}>
        <NumberTableCell>Id</NumberTableCell>
        <NameTableCell>Player</NameTableCell>
        <NumberTableCell>Wins</NumberTableCell>
        <NumberTableCell>Losses</NumberTableCell>
        <NumberTableCell>Goals shot</NumberTableCell>
        <NumberTableCell>Goals recv</NumberTableCell>
      </TableHeaderRow>
      {Object.entries(playerStats).map((entry, index) => {
        const player = entry[0];
        const stats = entry[1];
        return(
          <TableRow rowIndex={index+1}>
            <NumberTableCell>{stats.index}</NumberTableCell>
            <NameTableCell>{player}</NameTableCell>
            <NumberTableCell>{stats.wins}</NumberTableCell>
            <NumberTableCell>{stats.losses}</NumberTableCell>
            <NumberTableCell>{stats.goalsShot}</NumberTableCell>
            <NumberTableCell>{stats.goalsReceived}</NumberTableCell>
          </TableRow>
        );
      })}
    </Table>
  </div>
);

PlayerStats.propTypes = {
    title: PropTypes.string.isRequired,
    playerStats: PropTypes.shape().isRequired,
}

export default PlayerStats;