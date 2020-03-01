import { connect } from 'react-redux'
import PlayerList from "../components/PlayerStats"
import { sortStatsByPlayer } from '../store/actions/sortStatsByPlayer';
import { sortStatsByWinRate } from '../store/actions/sortStatsByWinRate';
import { sortStatsByGoalDifference } from '../store/actions/sortStatsByGoalDifference';

const mapStateToProps = (state, ownProps) => ({
  playerStats: state.gameData.playerStats,
  title: 'Stats'
});

const mapDispatchToProps = (dispatch) => ({
  sortByPlayer: () => dispatch(sortStatsByPlayer()),
  sortByWinRate:  () => dispatch(sortStatsByWinRate()),
  sortByGoalDifference: () => dispatch(sortStatsByGoalDifference()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerList)