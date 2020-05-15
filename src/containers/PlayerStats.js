import { connect } from 'react-redux';
import { sortStatsByPlayer } from '../store/actions/stats/sort/sortStatsByPlayer';
import { sortStatsByWinRate } from '../store/actions/stats/sort/sortStatsByWinRate';
import { sortStatsByGoalDifference } from '../store/actions/stats/sort/sortStatsByGoalDifference';
import { sortStatsByPoints } from '../store/actions/stats/sort/sortStatsByPoints';
import { sortStatsByPointsClose } from '../store/actions/stats/sort/sortStatsByPointsClose';
import { sortStatsByCloseRate } from '../store/actions/stats/sort/sortStatsByCloseRate';
import { sortStatsByTotalGames } from '../store/actions/stats/sort/sortStatsByTotalGames';
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
        dataRows,
    };
}

function mapDispatchToProps(dispatch) {
    const tableHeaders = [
        { text: 'Id' },
        { text: 'Player   ', onClick: () => dispatch(sortStatsByPlayer()) },
        { text: 'Games', onClick: () => dispatch(sortStatsByTotalGames()) },
        { text: 'Win rate', onClick: () => dispatch(sortStatsByWinRate()) },
        {
            text: 'Goal diff',
            onClick: () => dispatch(sortStatsByGoalDifference()),
        },
        { text: 'Pts (avg)', onClick: () => dispatch(sortStatsByPoints()) },
        {
            text: 'Pts (avg, close)',
            onClick: () => dispatch(sortStatsByPointsClose()),
        },
        {
            text: 'Games (close)',
            onClick: () => dispatch(sortStatsByCloseRate()),
        },
    ];
    return {
        tableHeaders,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTable);
