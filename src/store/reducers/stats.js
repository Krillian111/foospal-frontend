import { ACTION_SORT_STATS_BY_PLAYER } from '../actions/stats/sort/sortStatsByPlayer';
import { ACTION_SORT_STATS_BY_GOAL_DIFFERENCE } from '../actions/stats/sort/sortStatsByGoalDifference';
import { ACTION_SORT_STATS_BY_WIN_RATE } from '../actions/stats/sort/sortStatsByWinRate';
import { ACTION_SORT_STATS_BY_CLOSE_RATE } from '../actions/stats/sort/sortStatsByCloseRate';
import { ACTION_SORT_STATS_BY_POINTS } from '../actions/stats/sort/sortStatsByPoints';
import { ACTION_SORT_STATS_BY_POINTS_CLOSE } from '../actions/stats/sort/sortStatsByPointsClose';
import { PlayerStats, updatePlayerFromSingleGame } from '../data/playerStats';
import { fromPerspectiveOfA, fromPerspectiveOfB } from '../data/singleGame';
import { ACTION_SORT_STATS_BY_TOTAL_GAMES } from '../actions/stats/sort/sortStatsByTotalGames';
import { UPDATE_GAMES } from '../actions/games/updateGames';

const initialState = {
  singles: [],
};

const stats = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GAMES: {
      const { games } = action;
      const singles = mapGamesToPlayerStats(games);
      return {
        ...state,
        singles,
      };
    }
    case ACTION_SORT_STATS_BY_PLAYER:
    case ACTION_SORT_STATS_BY_WIN_RATE:
    case ACTION_SORT_STATS_BY_GOAL_DIFFERENCE:
    case ACTION_SORT_STATS_BY_CLOSE_RATE:
    case ACTION_SORT_STATS_BY_POINTS:
    case ACTION_SORT_STATS_BY_POINTS_CLOSE:
    case ACTION_SORT_STATS_BY_TOTAL_GAMES: {
      const sortedSingles = state.singles
        .sort(action.compareFunction)
        .filter(() => true); // force redux to notice state change by creating new array
      return {
        ...state,
        singles: sortedSingles,
      };
    }
    default:
      return state;
  }
};

function mapGamesToPlayerStats(games) {
  const playerStats = [];
  let playerId = 0;

  games.forEach((game) => {
    [fromPerspectiveOfA(game), fromPerspectiveOfB(game)].forEach(
      (subjectiveGame) => {
        if (
          !playerStats.find(
            (singlePlayer) => singlePlayer.name === subjectiveGame.playerName
          )
        ) {
          playerStats.push(
            new PlayerStats({
              id: playerId++,
              name: subjectiveGame.playerName,
            })
          );
        }
        const currentPlayerStats = playerStats.find(
          (singlePlayer) => singlePlayer.name === subjectiveGame.playerName
        );
        updatePlayerFromSingleGame(currentPlayerStats, subjectiveGame);
      }
    );
  });
  return playerStats;
}

export default stats;
