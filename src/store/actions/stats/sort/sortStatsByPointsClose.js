import { simpleCompareDescending } from '../../../util/sortUtil';
import { mapToPointsCloseAvg } from '../../../data/playerStats';

export const ACTION_SORT_STATS_BY_POINTS_CLOSE =
    'ACTION_SORT_STATS_BY_POINTS_CLOSE';

export const sortStatsByPointsClose = () => ({
    type: ACTION_SORT_STATS_BY_POINTS_CLOSE,
    compareFunction: compareUsingPointsCloseAvg,
});

const compareUsingPointsCloseAvg = (stats1, stats2) => {
    const closeGames1 = mapToPointsCloseAvg(stats1);
    const closeGames2 = mapToPointsCloseAvg(stats2);
    return simpleCompareDescending(closeGames1, closeGames2);
};
