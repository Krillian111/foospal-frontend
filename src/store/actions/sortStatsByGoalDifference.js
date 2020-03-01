import { simpleCompareDescending } from "../util/sortUtil";

export const ACTION_SORT_STATS_BY_GOAL_DIFFERENCE = 'ACTION_SORT_STATS_BY_GOAL_DIFFERENCE';

export const sortStatsByGoalDifference = () => ({
    type : ACTION_SORT_STATS_BY_GOAL_DIFFERENCE,
    compareFunction: compareUsingGoalDifference,
})

const compareUsingGoalDifference = (stats1, stats2) => {
  const goalDiff1 = stats1.goalsShot - stats1.goalsReceived;
  const goalDiff2 = stats2.goalsShot - stats2.goalsReceived;
  return simpleCompareDescending(goalDiff1, goalDiff2);
}