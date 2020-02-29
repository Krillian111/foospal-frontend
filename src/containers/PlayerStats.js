import { connect } from 'react-redux'
import PlayerList from "../components/PlayerStats"
import { sortStatsByPlayer } from '../store/actions/sortStatsByPlayer';

const mapStateToProps = (state, ownProps) => ({
  playerStats: state.gameData.playerStats,
  title: 'Stats'
});

const mapDispatchToProps = (dispatch) => ({
  sortByPlayer: () => dispatch(sortStatsByPlayer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerList)