import { put, takeLatest } from 'redux-saga/effects';
import { ADD_NEW_GAME } from '../actions/games/addNewGame';
import { EXTRACT_GAMES_FROM_CSV } from '../actions/stats/csv/extractGamesFromCsv';
import {
  fetchSingles,
  FETCH_SINGLES_FROM_BACKEND,
} from '../actions/stats/singles/fetchSingles';
import { updateGames } from '../actions/games/updateGames';

export default function* rootSaga() {
  yield takeLatest(`${ADD_NEW_GAME}_SUCCESS`, fetchGames);
  yield takeLatest(EXTRACT_GAMES_FROM_CSV, updateStats);
  yield takeLatest(`${FETCH_SINGLES_FROM_BACKEND}_SUCCESS`, updateStats);
}

function* fetchGames() {
  yield put(fetchSingles());
}

function* updateStats(action) {
  let games;
  if (action.type === EXTRACT_GAMES_FROM_CSV) {
    games = action.games;
  }
  if (action.type === `${FETCH_SINGLES_FROM_BACKEND}_SUCCESS`) {
    games = action.payload.data.singles.map(renameIdField);
  }
  yield put(updateGames(games));
}

function renameIdField(single) {
  const { _id } = single;
  delete single._id;
  single.id = _id;
  return single;
}
