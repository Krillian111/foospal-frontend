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
  width: 80px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding: 2px;
`;

const GameList = ({ title, games }) => (
  <div>
    <Header>{title}</Header>
    <Table>
      <TableHeaderRow rowIndex={0}>
        <TableCell>PlayerA</TableCell>
        <TableCell>PlayerB</TableCell>
        <TableCell>ScoreA</TableCell>
        <TableCell>ScoreB</TableCell>
      </TableHeaderRow>
      {games.map((game, index) => (
        <TableRow rowIndex={index+1}>
          <TableCell>{game.playerA}</TableCell>
          <TableCell>{game.playerB}</TableCell>
          <TableCell>{game.scoreA}</TableCell>
          <TableCell>{game.scoreB}</TableCell>
        </TableRow>
      ))}
    </Table>
  </div>
);

GameList.propTypes = {
    title: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired,
}

export default GameList;