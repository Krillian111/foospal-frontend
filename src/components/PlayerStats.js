import React from 'react';
import PropTypes from 'prop-types';
import SimpleTable from './common/SimpleTable';


const PlayerStats = ({ title, playerStats,
  sortByPlayer, sortByWinRate, sortByGoalDifference, sortByPoints, sortByPointsClose, sortByCloseRate}) => {
  const columnConfigs = [
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.stringLong,
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.numberShort,
  ]
  const tableHeaders = [
    {text:'Id'}, 
    {text:'Player', onClick: sortByPlayer}, 
    {text:'Win rate', onClick: sortByWinRate}, 
    {text:'Goal difference', onClick: sortByGoalDifference}, 
    {text: 'Points', onClick: sortByPoints},
    {text: 'Pts (close)', onClick: sortByPointsClose},
    {text: 'Close games', onClick: sortByCloseRate},
  ];
  const dataRows = playerStats.map((stats) => {
      return [
        stats.id,
        stats.name,
        ((stats.wins/(stats.wins+stats.losses)).toFixed(2)*100)+'%',
        stats.goalsShot-stats.goalsReceived,
        stats.points,
        stats.pointsWitCloseScores,
        ((stats.closeGames/(stats.wins+stats.losses)).toFixed(2)*100)+'%',
      ];
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
    playerStats: PropTypes.array.isRequired,
    sortByPlayer: PropTypes.func.isRequired,
}

export default PlayerStats;