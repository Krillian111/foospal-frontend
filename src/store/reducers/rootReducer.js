import { combineReducers } from 'redux';
import authorization from './authorization';
import gameData from './gameData';
import games from './games';

export default combineReducers({
  authorization,
  gameData,
  games,
});
