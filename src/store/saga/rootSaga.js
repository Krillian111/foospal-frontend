import { put, takeLatest } from 'redux-saga/effects';
import { ADD_NEW_GAME } from '../actions/games/addNewGame';
import { fetchSingles } from '../actions/stats/singles/fetchSingles';

function* fetchGames() {
  yield put(fetchSingles());
}

function* rootSaga() {
  yield takeLatest(`${ADD_NEW_GAME}_SUCCESS`, fetchGames);
}

export default rootSaga;
