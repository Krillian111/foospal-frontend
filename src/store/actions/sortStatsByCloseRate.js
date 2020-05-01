import { simpleCompareDescending } from '../util/sortUtil';
import { mapToCloseGameRate } from '../data/playerStats';

export const ACTION_SORT_STATS_BY_CLOSE_RATE =
    'ACTION_SORT_STATS_BY_CLOSE_RATE';

export const sortStatsByCloseRate = () => ({
    type: ACTION_SORT_STATS_BY_CLOSE_RATE,
    compareFunction: compareUsingCloseRate,
});

const compareUsingCloseRate = (stats1, stats2) => {
    const closeGames1 = mapToCloseGameRate(stats1);
    const closeGames2 = mapToCloseGameRate(stats2);
    return simpleCompareDescending(closeGames1, closeGames2);
};
