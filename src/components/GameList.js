import React from 'react';
import PropTypes from 'prop-types';
import SimpleTable from './common/SimpleTable';

const GameList = ({ title, games }) => {

  const columnConfigs = [
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.stringLong,
    SimpleTable.supportedDataTypes.stringLong,
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.numberShort,
  ]
  const tableHeaders = ['Game', 'PlayerA', 'PlayerB', 'ScoreA', 'ScoreB'];
  const dataRows = games.map((game) => {
      return [game.index, game.playerA, game.playerB, game.scoreA, game.scoreB];
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