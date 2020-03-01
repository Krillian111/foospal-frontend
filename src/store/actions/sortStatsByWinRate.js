import { simpleCompareDescending } from "../util/sortUtil";

export const ACTION_SORT_STATS_BY_WIN_RATE = 'ACTION_SORT_STATS_BY_WIN_RATE';

export const sortStatsByWinRate = () => ({
    type : ACTION_SORT_STATS_BY_WIN_RATE,
    compareFunction: compareUsingWinRate,
})

const compareUsingWinRate = (stats1, stats2) => {
  const winRate1 = stats1.wins/(stats1.wins+stats1.losses);
  const winRate2 = stats2.wins/(stats2.wins+stats2.losses);
  return simpleCompareDescending(winRate1, winRate2);
}