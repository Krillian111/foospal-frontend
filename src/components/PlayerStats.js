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
    {text: 'Pts (avg)', onClick: sortByPoints},
    {text: 'Pts (avg, close)', onClick: sortByPointsClose},
    {text: 'Close games', onClick: sortByCloseRate},
  ];
  const dataRows = playerStats.map((stats) => {
      return [
        stats.id,
        stats.name,
        Math.trunc(((stats.wins/(stats.wins+stats.losses))*100))+'%',
        stats.goalsShot-stats.goalsReceived,
        (Math.trunc(((stats.points/(stats.wins+stats.losses))*100)))/100,
        (Math.trunc(((stats.pointsWithCloseScores/(stats.wins+stats.losses))*100)))/100,
        Math.trunc(((stats.closeGames/(stats.wins+stats.losses))*100))+'%',
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