import React from 'react';
import PropTypes from 'prop-types';
import SimpleTable from './common/SimpleTable';
import cellDataType from './common/cellDataType';

const GameList = ({ title, games }) => {

  const columnConfigs = [
    cellDataType.numberShort,
    cellDataType.stringLong,
    cellDataType.stringLong,
    cellDataType.numberShort,
    cellDataType.numberShort,
  ]
  const tableHeaders = [
    {text:'Game'}, 
    {text:'PlayerA'}, 
    {text:'PlayerB'}, 
    {text:'ScoreA'}, 
    {text:'ScoreB'}
  ];
  const dataRows = games.map((game) => {
      return [game.id, game.playerA, game.playerB, game.scoreA, game.scoreB];
    });

  return(
    <SimpleTable
      title={title}
      columnConfigs={columnConfigs}
      tableHeaders={tableHeaders}
      dataRows={dataRows}
    />
  );
};

GameList.propTypes = {
    title: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired,
}

export default GameList;