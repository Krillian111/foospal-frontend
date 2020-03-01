export const sortBy = (fieldToSortBy) => (stats1, stats2) => {
    let comparison = 0;
    if (stats1[fieldToSortBy] > stats2[fieldToSortBy]) {
      comparison = 1;
    } else if (stats1[fieldToSortBy] < stats2[fieldToSortBy]) {
      comparison = -1;
    }
    return comparison;
}