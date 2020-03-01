import { ACTION_PARSE_CSV } from '../actions/parseCsv';
import { ACTION_SORT_STATS_BY_PLAYER } from '../actions/sortStatsByPlayer';
import { ACTION_SORT_STATS_BY_GOAL_DIFFERENCE } from '../actions/sortStatsByGoalDifference';
import { ACTION_SORT_STATS_BY_WIN_RATE } from '../actions/sortStatsByWinRate';
import { compareUsing, compareUsingWinRate, compareUsingGoalDifference } from './sortUtil';

function parseCsvToPlayers(csvAsText) {
  const games = csvAsText
      .split('\n')
      .filter((line, index) => index !== 0)
      .filter((line) => line.split(',').length === 4)
      .map(line => line.split(','))
      .map((line, index) => { return {
          id: index,
          playerA: line[0],
          playerB: line[1],
          scoreA: parseInt(line[2]),
          scoreB: parseInt(line[3]),
      }});
  return games;
}

function mapGamesToPlayerStats(games) {
  const playerStats = [];
  let playerId = 0;

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
      if(!playerStats.find(stats => stats.name===name)){
        playerStats.push({
          id: playerId++,
          name,
          wins: 0,
          losses: 0,
          goalsShot: 0,
          goalsReceived: 0,
        });
      }
      const currentPlayerStats = playerStats.find(stats => stats.name===name);
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
    games: [],
    playerStats: [],
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
    case ACTION_SORT_STATS_BY_PLAYER: {
      const sortedStats = state.playerStats.sort(compareUsing('name'))
        .filter(() => true); // force redux to notice state change by creating new array
      return {
        ...state,
        playerStats: sortedStats,
      };
    }
    case ACTION_SORT_STATS_BY_WIN_RATE: {
      const sortedStats = state.playerStats.sort(compareUsingWinRate)
        .filter(() => true); // force redux to notice state change by creating new array
      return {
        ...state,
        playerStats: sortedStats,
      };
    }
    case ACTION_SORT_STATS_BY_GOAL_DIFFERENCE: {
      const sortedStats = state.playerStats.sort(compareUsingGoalDifference)
        .filter(() => true); // force redux to notice state change by creating new array
      return {
        ...state,
        playerStats: sortedStats,
      };
    }
    default:
      return state;
  }
}

export default gameData;
