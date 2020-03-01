const simpleCompare = (field1, field2) => {
  let comparison = 0;
    if (field1 > field2) {
      comparison = 1;
    } else if (field1 < field2) {
      comparison = -1;
    }
    return comparison;
}

export const compareUsing = (fieldToSortBy) => (stats1, stats2) => {
  const fieldToSortBy1 = stats1[fieldToSortBy];
  const fieldToSortBy2 = stats2[fieldToSortBy];
  return simpleCompare(fieldToSortBy1, fieldToSortBy2);
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
