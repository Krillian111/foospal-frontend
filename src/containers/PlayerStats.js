import { connect } from 'react-redux';
import { sortStatsByPlayer } from '../store/actions/sortStatsByPlayer';
import { sortStatsByWinRate } from '../store/actions/sortStatsByWinRate';
import { sortStatsByGoalDifference } from '../store/actions/sortStatsByGoalDifference';
import { sortStatsByPoints } from '../store/actions/sortStatsByPoints';
import { sortStatsByPointsClose } from '../store/actions/sortStatsByPointsClose';
import { sortStatsByCloseRate } from '../store/actions/sortStatsByCloseRate';
import { sortStatsByTotalGames } from '../store/actions/sortStatsByTotalGames';
import cellDataType from '../components/0atom/table/cellDataType';
import {
    mapToWinRate,
    mapToGoalDifference,
    mapToPointsAvg,
    mapToPointsCloseAvg,
    mapToCloseGameRate,
    mapToTotalGames,
} from '../store/data/playerStats';
import {
    cutOffAfterTwoDecimal,
    convertToPercentage,
} from '../components/utils/formatter';
import SimpleTable from '../components/2organism/table/SimpleTable';

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
    { text: 'Player   ', onClick: sortStatsByPlayer },
    { text: 'Games', onClick: sortStatsByTotalGames },
    { text: 'Win rate', onClick: sortStatsByWinRate },
    { text: 'Goal diff', onClick: sortStatsByGoalDifference },
    { text: 'Pts (avg)', onClick: sortStatsByPoints },
    { text: 'Pts (avg, close)', onClick: sortStatsByPointsClose },
    { text: 'Games (close)', onClick: sortStatsByCloseRate },
];

function mapStateToProps(state) {
    const dataRows = state.gameData.playerStats.map((stats) => {
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
    return {
        title: 'Stats',
        columnConfigs,
        tableHeaders,
        dataRows,
    };
}

const mapDispatchToProps = {
    sortByPlayer: sortStatsByPlayer,
    sortByTotalGames: sortStatsByTotalGames,
    sortByWinRate: sortStatsByWinRate,
    sortByGoalDifference: sortStatsByGoalDifference,
    sortByPoints: sortStatsByPoints,
    sortByPointsClose: sortStatsByPointsClose,
    sortByCloseRate: sortStatsByCloseRate,
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTable);
