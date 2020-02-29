import { ACTION_PARSE_CSV } from '../actions/parseCsv';

function parseCsvToPlayers(csvAsText) {
  const games = csvAsText
      .split('\n')
      .filter((line, index) => index !== 0)
      .filter((line) => line.split(',').length === 4)
      .map(line => line.split(','))
      .map((line, index) => { return {
          index,
          playerA: line[0],
          playerB: line[1],
          scoreA: parseInt(line[2]),
          scoreB: parseInt(line[3]),
      }});
  return games;
}

function mapGamesToPlayerStats(games) {
  const playerStats = {};
  let playerIndex = 0;

  games.forEach(game => {
    [{
      name: game.playerA,
      win: game.scoreA > game.scoreB ? true : false,
      playerScore: game.scoreA,
      opponentScore: game.scoreB,
    },
    {
      name: game.playerB,
      win: game.scoreB > game.scoreA ? true : false,
      playerScore: game.scoreB,
      opponentScore: game.scoreA,
    }]
    .forEach(({name, win, playerScore, opponentScore})=> {
      if(!playerStats[name]) {
        playerStats[name] = {
          index: playerIndex++,
          wins: 0,
          losses: 0,
          goalsShot: 0,
          goalsReceived: 0,
        };
      }
      const currentPlayerStats = playerStats[name];
      currentPlayerStats.goalsShot += playerScore;
      currentPlayerStats.goalsReceived += opponentScore;
      if(win) {
        currentPlayerStats.wins += 1;
      } else {
        currentPlayerStats.losses += 1;
      }
    })
    
  })
  return playerStats;
}

const initialState = {
    title: 'Games',
    games: [],
    playerStats: {},
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
