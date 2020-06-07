export const ADD_NEW_GAME = 'ADD_NEW_GAME';
export const ADD_NEW_GAME_VALIDATION_ERROR = 'ADD_NEW_GAME_VALIDATION_ERROR';

export function addNewGame(game, accessToken) {
  if (isValidGame(game)) {
    return {
      type: ADD_NEW_GAME,
      payload: {
        request: {
          method: 'post',
          headers: { Authorization: `Bearer ${accessToken}` },
          url: '/api/singles',
          data: game,
        },
      },
    };
  }
  return {
    type: ADD_NEW_GAME_VALIDATION_ERROR,
    error: 'Required field is missing!',
  };
}

function isValidGame(game) {
  return (
    game.playerA &&
    game.playerB &&
    game.scoreA !== undefined &&
    game.scoreB !== undefined &&
    game.playedOn !== undefined
  );
}
