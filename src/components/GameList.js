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


const GameList = ({ title, games }) => (
  <div>
    <Header>{title}</Header>
    <Table>
      <TableHeaderRow rowIndex={0}>
        <NumberTableCell>Game</NumberTableCell>
        <NameTableCell>PlayerA</NameTableCell>
        <NameTableCell>PlayerB</NameTableCell>
        <NumberTableCell>ScoreA</NumberTableCell>
        <NumberTableCell>ScoreB</NumberTableCell>
      </TableHeaderRow>
      {games.map((game, index) => (
        <TableRow rowIndex={index+1}>
          <NumberTableCell>{game.index}</NumberTableCell>
          <NameTableCell>{game.playerA}</NameTableCell>
          <NameTableCell>{game.playerB}</NameTableCell>
          <NumberTableCell>{game.scoreA}</NumberTableCell>
          <NumberTableCell>{game.scoreB}</NumberTableCell>
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