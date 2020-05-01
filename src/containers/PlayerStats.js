import { connect } from 'react-redux';
import PlayerList from '../components/PlayerStats';
import { sortStatsByPlayer } from '../store/actions/sortStatsByPlayer';
import { sortStatsByWinRate } from '../store/actions/sortStatsByWinRate';
import { sortStatsByGoalDifference } from '../store/actions/sortStatsByGoalDifference';
import { sortStatsByPoints } from '../store/actions/sortStatsByPoints';
import { sortStatsByPointsClose } from '../store/actions/sortStatsByPointsClose';
import { sortStatsByCloseRate } from '../store/actions/sortStatsByCloseRate';
import { sortStatsByTotalGames } from '../store/actions/sortStatsByTotalGames';

const mapStateToProps = (state, ownProps) => ({
    playerStats: state.gameData.playerStats,
    title: 'Stats',
});

const mapDispatchToProps = (dispatch) => ({
    sortByPlayer: () => dispatch(sortStatsByPlayer()),
    sortByWinRate: () => dispatch(sortStatsByWinRate()),
    sortByTotalGames: () => dispatch(sortStatsByTotalGames()),
    sortByGoalDifference: () => dispatch(sortStatsByGoalDifference()),
    sortByPoints: () => dispatch(sortStatsByPoints()),
    sortByPointsClose: () => dispatch(sortStatsByPointsClose()),
    sortByCloseRate: () => dispatch(sortStatsByCloseRate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
