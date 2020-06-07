import fs from 'fs';
import stats from '../stats';
import { extractGamesFromCsv } from '../../actions/stats/csv/extractGamesFromCsv';
import { PlayerStats } from '../../data/playerStats';
import { updateGames } from '../../actions/games/updateGames';

describe('stats', () => {
  const testCsvFile = fs
    .readFileSync(`${process.cwd()}/src/store/reducers/test/testData.csv`)
    .toString();

  test('csv is mapped to singleStats', () => {
    const action = updateGames(extractGamesFromCsv(testCsvFile).games);
    const actualState = stats({}, action);
    expect(actualState.singles).toStrictEqual([
      new PlayerStats({
        id: 0,
        name: 'Alpha',
        wins: 2,
        losses: 0,
        goalsShot: 10,
        goalsReceived: 6,
        points: 6,
        pointsWithCloseScores: 5,
        closeGames: 1,
      }),
      new PlayerStats({
        id: 1,
        name: 'Beta',
        wins: 0,
        losses: 1,
        goalsShot: 4,
        goalsReceived: 5,
        points: 0,
        pointsWithCloseScores: 1,
        closeGames: 1,
      }),
      new PlayerStats({
        id: 2,
        name: 'Delta',
        wins: 0,
        losses: 1,
        goalsShot: 2,
        goalsReceived: 5,
        points: 0,
        pointsWithCloseScores: 0,
        closeGames: 0,
      }),
      new PlayerStats({
        id: 3,
        name: 'Gamma',
        wins: 1,
        losses: 1,
        goalsShot: 7,
        goalsReceived: 7,
        points: 3,
        pointsWithCloseScores: 3,
        closeGames: 0,
      }),
    ]);
  });
});
