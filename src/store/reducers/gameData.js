import { ACTION_PARSE_CSV } from '../actions/parseCsv';

function parseCsvToPlayers(csvAsText) {
  const games = csvAsText
      .split('\n')
      .filter((line, index) => index !== 0)
      .map(line => line.split(','))
      .map(line => { return {
          playerA: line[0],
          playerB: line[1],
          scoreA: line[2],
          scoreB: line[3],
      }});
  return games;
}

function mapGamesToPlayerStats(games) {
  const playerStats = {};

  games.forEach(game => {
    playerStats[game.playerA] = {};
    playerStats[game.playerB] = {};
  })
  return playerStats;
}

const initialState = {
    title: 'games',
    games: [
      {
        playerA: 'Andy',
        playerB: 'Berta',
        scoreA: '3',
        scoreB: '7',
      },
      {
        playerA: 'Berta',
        playerB: 'Andy',
        scoreA: '4',
        scoreB: '7',
      }
    ]
};

const gameData = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_PARSE_CSV: {
      const games = parseCsvToPlayers(action.csvAsText);
      const playerStats = mapGamesToPlayerStats(games);
      return {
        ...state,
        games,
        playerStats,
      };
    }
    default:
      return state;
  }
}

export default gameData;
