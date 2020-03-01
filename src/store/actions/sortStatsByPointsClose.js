import { simpleCompareDescending } from "../util/sortUtil";

export const ACTION_SORT_STATS_BY_POINTS_CLOSE = 'ACTION_SORT_STATS_BY_POINTS_CLOSE';

export const sortStatsByPointsClose = () => ({
    type : ACTION_SORT_STATS_BY_POINTS_CLOSE,
    compareFunction: compareUsingPointsCloseAvg,
})

const compareUsingPointsCloseAvg = (stats1, stats2) => {
  const closeGames1 = stats1.pointsWithCloseScores/(stats1.wins+stats1.losses);
  const closeGames2 = stats2.pointsWithCloseScores/(stats2.wins+stats2.losses);
  return simpleCompareDescending(closeGames1, closeGames2);
}