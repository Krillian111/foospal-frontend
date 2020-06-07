import { connect } from 'react-redux';
import { sortStatsByPlayer } from '../../store/actions/stats/sort/sortStatsByPlayer';
import { sortStatsByWinRate } from '../../store/actions/stats/sort/sortStatsByWinRate';
import { sortStatsByGoalDifference } from '../../store/actions/stats/sort/sortStatsByGoalDifference';
import { sortStatsByPoints } from '../../store/actions/stats/sort/sortStatsByPoints';
import { sortStatsByPointsClose } from '../../store/actions/stats/sort/sortStatsByPointsClose';
import { sortStatsByCloseRate } from '../../store/actions/stats/sort/sortStatsByCloseRate';
import { sortStatsByTotalGames } from '../../store/actions/stats/sort/sortStatsByTotalGames';
import cellDataType from '../../components/0atom/table/cellDataType';
import {
  mapToWinRate,
  mapToGoalDifference,
  mapToPointsAvg,
  mapToPointsCloseAvg,
  mapToCloseGameRate,
  mapToTotalGames,
} from '../../store/data/playerStats';
import {
  cutOffAfterTwoDecimal,
  convertToPercentage,
} from '../../components/utils/formatter';
import SimpleTable from '../../components/2organism/table/SimpleTable';

function mapStateToProps(state) {
  const dataRows = state.stats.singles.map((stats) => {
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
    dataRows,
  };
}

function mapDispatchToProps(dispatch) {
  const columnConfigs = [
    {
      type: cellDataType.numberShort,
      headerLabel: 'Id',
      onHeaderClick: () => {},
    },
    {
      type: cellDataType.stringLong,
      headerLabel: 'Player   ',
      onHeaderClick: () => dispatch(sortStatsByPlayer()),
    },
    {
      type: cellDataType.numberShort,
      headerLabel: 'Games',
      onHeaderClick: () => dispatch(sortStatsByTotalGames()),
    },
    {
      type: cellDataType.numberShort,
      headerLabel: 'Win rate',
      onHeaderClick: () => dispatch(sortStatsByWinRate()),
    },
    {
      type: cellDataType.numberShort,
      headerLabel: 'Goal diff',
      onHeaderClick: () => dispatch(sortStatsByGoalDifference()),
    },
    {
      type: cellDataType.numberShort,
      headerLabel: 'Pts (avg)',
      onHeaderClick: () => dispatch(sortStatsByPoints()),
    },
    {
      type: cellDataType.numberShort,
      headerLabel: 'Pts (avg, close)',
      onHeaderClick: () => dispatch(sortStatsByPointsClose()),
    },
    {
      type: cellDataType.numberShort,
      headerLabel: 'Games (close)',
      onHeaderClick: () => dispatch(sortStatsByCloseRate),
    },
  ];
  return {
    columnConfigs,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleTable);
