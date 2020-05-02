import { simpleCompareDescending } from '../util/sortUtil';
import { mapToWinRate } from '../data/playerStats';

export const ACTION_SORT_STATS_BY_WIN_RATE = 'ACTION_SORT_STATS_BY_WIN_RATE';

export const sortStatsByWinRate = () => ({
    type: ACTION_SORT_STATS_BY_WIN_RATE,
    compareFunction: compareUsingWinRate,
});

const compareUsingWinRate = (stats1, stats2) => {
    const winRate1 = mapToWinRate(stats1);
    const winRate2 = mapToWinRate(stats2);
    return simpleCompareDescending(winRate1, winRate2);
};
