import { simpleCompareDescending } from "../util/sortUtil";
import { mapToPointsAvg } from "../data/playerStats";

export const ACTION_SORT_STATS_BY_POINTS = 'ACTION_SORT_STATS_BY_POINTS';

export const sortStatsByPoints = () => ({
    type : ACTION_SORT_STATS_BY_POINTS,
    compareFunction: compareUsingPointsAvg,
})

const compareUsingPointsAvg = (stats1, stats2) => {
  const closeGames1 = mapToPointsAvg(stats1);
  const closeGames2 = mapToPointsAvg(stats2);
  return simpleCompareDescending(closeGames1, closeGames2);
}