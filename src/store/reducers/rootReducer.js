import { combineReducers } from 'redux';
import authorization from './authorization';
import stats from './stats';
import games from './games';

export default combineReducers({
  authorization,
  stats,
  games,
});
