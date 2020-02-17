import { ACTION_PARSE_CSV } from '../actions/parseCsv';

function parseCsvToPlayers(csvAsText) {

  const games = csvAsText
      .split('\n')
      .filter(line => !line.includes('Team'))
      .map(line => line.split(','))
      .map(line => { return {
          playerA: line[0],
          playerB: line[1],
          scoreA: line[2],
          scoreB: line[3],
      }});
  return games;
}

const initialState = {
    title: 'games',
    games: [
      {
        playerA: 'Andy',
        playerB: 'Berta',
        scoreA: '3',
        scoreB: '7',
      }
    ]
}

const gameData = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_PARSE_CSV: {
      const games = parseCsvToPlayers(action.csvAsText);
      return {
        ...state,
        games,
      }
    }
    default:
      return state;
  }
}

export default gameData;
