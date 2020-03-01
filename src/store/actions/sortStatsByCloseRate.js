import { simpleCompareDescending } from "../util/sortUtil";

export const ACTION_SORT_STATS_BY_CLOSE_RATE = 'ACTION_SORT_STATS_BY_CLOSE_RATE';

export const sortStatsByCloseRate = () => ({
    type : ACTION_SORT_STATS_BY_CLOSE_RATE,
    compareFunction: compareUsingCloseRate,
})

const compareUsingCloseRate = (stats1, stats2) => {
  const closeGames1 = stats1.closeGames/(stats1.wins+stats1.losses);
  const closeGames2 = stats2.closeGames/(stats2.wins+stats2.losses);
  return simpleCompareDescending(closeGames1, closeGames2);
}