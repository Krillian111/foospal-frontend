import React from 'react';
import PropTypes from 'prop-types';
import SimpleTable from './common/SimpleTable';


const PlayerStats = ({ title, playerStats, sortByPlayer }) => {
  const columnConfigs = [
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.stringLong,
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.numberShort,
    SimpleTable.supportedDataTypes.numberShort,
  ]
  const tableHeaders = [
    {text:'Id'}, 
    {text:'Player', onClick: sortByPlayer}, 
    {text:'Wins'}, 
    {text:'Losses'}, 
    {text:'Goals shot'}, 
    {text:'Goals recv'}
  ];
  const dataRows = playerStats.map((stats) => {
      return [stats.id, stats.name, stats.wins, stats.losses, stats.goalsShot, stats.goalsReceived];
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