import { compareAscendingUsing } from '../util/sortUtil';

export const ACTION_SORT_STATS_BY_PLAYER = 'ACTION_SORT_STATS_BY_PLAYER';

export const sortStatsByPlayer = () => ({
    type: ACTION_SORT_STATS_BY_PLAYER,
    compareFunction: compareAscendingUsing('name'),
});
