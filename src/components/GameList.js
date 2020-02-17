import React from 'react';
import PropTypes from 'prop-types';

const GameList = ({ title, games }) => (
  <div>
    <h1>{title}</h1>
    <table>
      <thead>
        <th>PlayerA</th>
        <th>PlayerB</th>
        <th>ScoreA</th>
        <th>ScoreB</th>
      </thead>
      <tbody>
        {games.map((game, index) => (
          <tr>
            <td>{game.playerA}</td>
            <td>{game.playerB}</td>
            <td>{game.scoreA}</td>
            <td>{game.scoreB}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

GameList.propTypes = {
    title: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired,
}

export default GameList;