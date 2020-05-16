export const simpleCompareDescending = (field1, field2) => {
  let comparison = 0;
  if (field1 > field2) {
    comparison = -1;
  } else if (field1 < field2) {
    comparison = 1;
  }
  return comparison;
};

export const invert = (comparisonResult) => comparisonResult * -1;

export const compareAscendingUsing = (fieldToSortBy) => (stats1, stats2) => {
  return invert(compareDescendingUsing(fieldToSortBy)(stats1, stats2));
};

export const compareDescendingUsing = (fieldToSortBy) => (stats1, stats2) => {
  const fieldToSortBy1 = stats1[fieldToSortBy];
  const fieldToSortBy2 = stats2[fieldToSortBy];
  return simpleCompareDescending(fieldToSortBy1, fieldToSortBy2);
};
