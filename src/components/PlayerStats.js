import React from 'react';
import PropTypes from 'prop-types';
import cellDataType from './table/cellDataType';
import SimpleTable from './table/SimpleTable';
import {
    mapToWinRate,
    mapToGoalDifference,
    mapToPointsAvg,
    mapToPointsCloseAvg,
    mapToCloseGameRate,
    mapToTotalGames,
} from '../store/data/playerStats';
import { cutOffAfterTwoDecimal, convertToPercentage } from './utils/formatter';

const PlayerStats = ({
    title,
    playerStats,
    sortByPlayer,
    sortByTotalGames,
    sortByWinRate,
    sortByGoalDifference,
    sortByPoints,
    sortByPointsClose,
    sortByCloseRate,
}) => {
    const columnConfigs = [
        cellDataType.numberShort,
        cellDataType.stringLong,
        cellDataType.numberShort,
        cellDataType.numberShort,
        cellDataType.numberShort,
        cellDataType.numberShort,
        cellDataType.numberShort,
        cellDataType.numberShort,
    ];
    const tableHeaders = [
        { text: 'Id' },
        { text: 'Player', onClick: sortByPlayer },
        { text: 'Games', onClick: sortByTotalGames },
        { text: 'Win rate', onClick: sortByWinRate },
        { text: 'Goal diff', onClick: sortByGoalDifference },
        { text: 'Pts (avg)', onClick: sortByPoints },
        { text: 'Pts (avg, close)', onClick: sortByPointsClose },
        { text: 'Games (close)', onClick: sortByCloseRate },
    ];
    const dataRows = playerStats.map((stats) => {
        return [
            stats.id,
            stats.name,
            mapToTotalGames(stats),
            convertToPercentage(mapToWinRate(stats)),
            mapToGoalDifference(stats),
            cutOffAfterTwoDecimal(mapToPointsAvg(stats)),
            cutOffAfterTwoDecimal(mapToPointsCloseAvg(stats)),
            convertToPercentage(mapToCloseGameRate(stats)),
        ];
    });

    return (
        <SimpleTable
            title={title}
            columnConfigs={columnConfigs}
            tableHeaders={tableHeaders}
            dataRows={dataRows}
        />
    );
};

PlayerStats.propTypes = {
    title: PropTypes.string.isRequired,
    playerStats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        })
    ).isRequired,
    sortByPlayer: PropTypes.func.isRequired,
    sortByTotalGames: PropTypes.func.isRequired,
    sortByWinRate: PropTypes.func.isRequired,
    sortByGoalDifference: PropTypes.func.isRequired,
    sortByPoints: PropTypes.func.isRequired,
    sortByPointsClose: PropTypes.func.isRequired,
    sortByCloseRate: PropTypes.func.isRequired,
};

export default PlayerStats;
