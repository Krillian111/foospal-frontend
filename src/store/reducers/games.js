import { SET_ADD_GAME_VISIBILITY } from '../actions/games/setAddGameVisibility';
import {
  ADD_NEW_GAME,
  ADD_NEW_GAME_VALIDATION_ERROR,
} from '../actions/games/addNewGame';
import { UPDATE_GAMES } from '../actions/games/updateGames';

const initialState = {
  games: [],
  isAddGameVisible: false,
  error: undefined,
  success: undefined,
};

const games = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GAMES: {
      return {
        ...state,
        games: action.games,
      };
    }
    case SET_ADD_GAME_VISIBILITY: {
      return {
        ...state,
        isAddGameVisible: action.isVisible,
        error: undefined,
        success: undefined,
      };
    }
    case `${ADD_NEW_GAME}_SUCCESS`: {
      return {
        ...state,
        error: undefined,
        success: 'Added new game!',
      };
    }
    case `${ADD_NEW_GAME}_FAIL`: {
      return {
        ...state,
        error: 'Adding new game failed!',
        success: undefined,
      };
    }
    case ADD_NEW_GAME_VALIDATION_ERROR: {
      return {
        ...state,
        error: action.error,
        success: undefined,
      };
    }
    default:
      return state;
  }
};

export default games;
