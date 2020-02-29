import { connect } from 'react-redux'
import PlayerList from "../components/PlayerStats"

const mapStateToProps = (state, ownProps) => ({
  playerStats: state.gameData.playerStats,
  title: 'Stats'
})
  
export default connect(
  mapStateToProps,
  null
)(PlayerList)