import { ACTION_PARSE_CSV } from '../actions/stats/csv/parseCsv';
import { ACTION_SORT_STATS_BY_PLAYER } from '../actions/stats/sort/sortStatsByPlayer';
import { ACTION_SORT_STATS_BY_GOAL_DIFFERENCE } from '../actions/stats/sort/sortStatsByGoalDifference';
import { ACTION_SORT_STATS_BY_WIN_RATE } from '../actions/stats/sort/sortStatsByWinRate';
import { ACTION_SORT_STATS_BY_CLOSE_RATE } from '../actions/stats/sort/sortStatsByCloseRate';
import { ACTION_SORT_STATS_BY_POINTS } from '../actions/stats/sort/sortStatsByPoints';
import { ACTION_SORT_STATS_BY_POINTS_CLOSE } from '../actions/stats/sort/sortStatsByPointsClose';
import { PlayerStats, updatePlayerFromSingleGame } from '../data/playerStats';
import {
  SingleGame,
  fromPerspectiveOfA,
  fromPerspectiveOfB,
} from '../data/singleGame';
import { ACTION_SORT_STATS_BY_TOTAL_GAMES } from '../actions/stats/sort/sortStatsByTotalGames';
import { FETCH_SINGLES_FROM_BACKEND } from '../actions/stats/singles/fetchSingles';

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
    case `${FETCH_SINGLES_FROM_BACKEND}_SUCCESS`: {
      const games = action.payload.data.singles.map(renameIdField);
      const playerStats = mapGamesToPlayerStats(games);
      return {
        ...state,
        games,
        playerStats,
      };
    }
    case ACTION_SORT_STATS_BY_PLAYER:
    case ACTION_SORT_STATS_BY_WIN_RATE:
    case ACTION_SORT_STATS_BY_GOAL_DIFFERENCE:
    case ACTION_SORT_STATS_BY_CLOSE_RATE:
    case ACTION_SORT_STATS_BY_POINTS:
    case ACTION_SORT_STATS_BY_POINTS_CLOSE:
    case ACTION_SORT_STATS_BY_TOTAL_GAMES: {
      const sortedStats = state.playerStats
        .sort(action.compareFunction)
        .filter(() => true); // force redux to notice state change by creating new array
      return {
        ...state,
        playerStats: sortedStats,
      };
    }
    default:
      return state;
  }
};

function parseCsvToPlayers(csvAsText) {
  const games = csvAsText
    .split('\n')
    .filter((line, index) => index !== 0)
    .filter((line) => line.split(',').length === 4)
    .map((line) => line.split(','))
    .map((line, index) => {
      return new SingleGame({
        id: index,
        playerA: line[0],
        playerB: line[1],
        scoreA: parseInt(line[2]),
        scoreB: parseInt(line[3]),
      });
    });
  return games;
}

function mapGamesToPlayerStats(games) {
  const playerStats = [];
  let playerId = 0;

  games.forEach((game) => {
    [fromPerspectiveOfA(game), fromPerspectiveOfB(game)].forEach(
      (subjectiveGame) => {
        if (
          !playerStats.find((stats) => stats.name === subjectiveGame.playerName)
        ) {
          playerStats.push(
            new PlayerStats({
              id: playerId++,
              name: subjectiveGame.playerName,
            })
          );
        }
        const currentPlayerStats = playerStats.find(
          (stats) => stats.name === subjectiveGame.playerName
        );
        updatePlayerFromSingleGame(currentPlayerStats, subjectiveGame);
      }
    );
  });
  return playerStats;
}

function renameIdField(single) {
  const { _id } = single;
  delete single._id;
  single.id = _id;
  return single;
}

export default gameData;
