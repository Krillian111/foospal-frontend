import { simpleCompareDescending } from '../../../util/sortUtil';
import { mapToTotalGames } from '../../../data/playerStats';

export const ACTION_SORT_STATS_BY_TOTAL_GAMES =
    'ACTION_SORT_STATS_BY_TOTAL_GAMES';

export const sortStatsByTotalGames = () => ({
    type: ACTION_SORT_STATS_BY_TOTAL_GAMES,
    compareFunction: compareUsingTotalGames,
});

const compareUsingTotalGames = (stats1, stats2) => {
    const closeGames1 = mapToTotalGames(stats1);
    const closeGames2 = mapToTotalGames(stats2);
    return simpleCompareDescending(closeGames1, closeGames2);
};
