import { connect } from 'react-redux';
import GameList from '../components/GameList';

const mapStateToProps = (state) => ({
    games: state.gameData.games,
    title: 'Games',
});

export default connect(mapStateToProps, null)(GameList);
