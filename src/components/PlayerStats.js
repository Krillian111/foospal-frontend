import React from 'react';
import PropTypes from 'prop-types';
import SimpleTable from './common/SimpleTable';


const PlayerStats = ({ title, playerStats }) => {
  const columnConfigs = [
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.stringLong,
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.numberShort,
  ]
  const tableHeaders = ['Id', 'Player', 'Wins', 'Losses', 'Goals shot', 'Goals recv'];
  const dataRows = Object.entries(playerStats).map((entry) => {
      const player = entry[0];
      const stats = entry[1];
      return [stats.index, player, stats.wins, stats.losses, stats.goalsShot, stats.goalsReceived];
    });

  return(
    <SimpleTable
      title={title}
      columnConfigs={columnConfigs}
      tableHeaders={tableHeaders}
      dataRows={dataRows}
    />
  );
}
  
PlayerStats.propTypes = {
    title: PropTypes.string.isRequired,
    playerStats: PropTypes.shape().isRequired,
}

export default PlayerStats;