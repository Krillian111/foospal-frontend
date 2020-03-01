import { simpleCompareDescending } from "../util/sortUtil";

export const ACTION_SORT_STATS_BY_POINTS = 'ACTION_SORT_STATS_BY_POINTS';

export const sortStatsByPoints = () => ({
    type : ACTION_SORT_STATS_BY_POINTS,
    compareFunction: compareUsingPointsAvg,
})

const compareUsingPointsAvg = (stats1, stats2) => {
  const closeGames1 = stats1.points/(stats1.wins+stats1.losses);
  const closeGames2 = stats2.points/(stats2.wins+stats2.losses);
  return simpleCompareDescending(closeGames1, closeGames2);
}