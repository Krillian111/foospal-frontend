import fs from 'fs';
import games from '../games';
import { extractGamesFromCsv } from '../../actions/stats/csv/extractGamesFromCsv';
import { SingleGame } from '../../data/singleGame';
import { updateGames } from '../../actions/games/updateGames';

describe('games', () => {
  const testCsvFile = fs
    .readFileSync(`${process.cwd()}/src/store/reducers/test/testData.csv`)
    .toString();

  test('csv is mapped to games', () => {
    const action = updateGames(extractGamesFromCsv(testCsvFile).games);
    const actualState = games({}, action);
    expect(actualState.games).toStrictEqual([
      new SingleGame({
        id: 0,
        playerA: 'Alpha',
        playerB: 'Beta',
        scoreA: 5,
        scoreB: 4,
      }),
      new SingleGame({
        id: 1,
        playerA: 'Delta',
        playerB: 'Gamma',
        scoreA: 2,
        scoreB: 5,
      }),
      new SingleGame({
        id: 2,
        playerA: 'Gamma',
        playerB: 'Alpha',
        scoreA: 2,
        scoreB: 5,
      }),
    ]);
  });
});
