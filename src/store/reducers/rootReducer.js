import { combineReducers } from 'redux';
import gameData from './gameData';
import authorization from './authorization';

export default combineReducers({
    authorization,
    gameData,
});
