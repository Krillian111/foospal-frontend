const simpleCompare = (field1, field2) => {
  let comparison = 0;
    if (field1 > field2) {
      comparison = 1;
    } else if (field1 < field2) {
      comparison = -1;
    }
    return comparison;
}

export const compareAscendingUsing = (fieldToSortBy) => (stats1, stats2) => {
  const fieldToSortBy1 = stats1[fieldToSortBy];
  const fieldToSortBy2 = stats2[fieldToSortBy];
  return simpleCompare(fieldToSortBy1, fieldToSortBy2);
}

export const compareDescendingUsing = (fieldToSortBy) => (stats1, stats2) => {
  return -1 * compareAscendingUsing(fieldToSortBy)(stats1, stats2);
}

export const compareUsingWinRate = (stats1, stats2) => {
  const winRate1 = stats1.wins/(stats1.wins+stats1.losses);
  const winRate2 = stats2.wins/(stats2.wins+stats2.losses);
  return -1 * simpleCompare(winRate1, winRate2);
}

export const compareUsingGoalDifference = (stats1, stats2) => {
  const goalDiff1 = stats1.goalsShot - stats1.goalsReceived;
  const goalDiff2 = stats2.goalsShot - stats2.goalsReceived;
  return -1 * simpleCompare(goalDiff1, goalDiff2);
}

export const compareUsingCloseRate = (stats1, stats2) => {
  const closeGames1 = stats1.closeGames/(stats1.wins+stats1.losses);
  const closeGames2 = stats2.closeGames/(stats2.wins+stats2.losses);
  return -1 * simpleCompare(closeGames1, closeGames2);
}