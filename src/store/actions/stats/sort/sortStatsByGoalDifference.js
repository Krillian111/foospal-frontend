import { simpleCompareDescending } from '../../../util/sortUtil';
import { mapToGoalDifference } from '../../../data/playerStats';

export const ACTION_SORT_STATS_BY_GOAL_DIFFERENCE =
    'ACTION_SORT_STATS_BY_GOAL_DIFFERENCE';

export const sortStatsByGoalDifference = () => ({
    type: ACTION_SORT_STATS_BY_GOAL_DIFFERENCE,
    compareFunction: compareUsingGoalDifference,
});

const compareUsingGoalDifference = (stats1, stats2) => {
    const goalDiff1 = mapToGoalDifference(stats1);
    const goalDiff2 = mapToGoalDifference(stats2);
    return simpleCompareDescending(goalDiff1, goalDiff2);
};
