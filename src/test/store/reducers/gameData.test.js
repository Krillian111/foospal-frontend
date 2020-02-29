import fs from 'fs';
import gameData from '../../../store/reducers/gameData';
import { ACTION_PARSE_CSV } from '../../../store/actions/parseCsv';

describe('gameData', () => {
  const testCsvFile = fs.readFileSync(process.cwd() + '/src/test/store/reducers/testData.csv').toString();
  
  test('file is mapped to playerStats', () => {
    const actualState = gameData({}, {
        type: ACTION_PARSE_CSV,
        csvAsText: testCsvFile,
    })
    expect(actualState.playerStats).toStrictEqual(
      [
        {
          id: 0,
          name: 'Alpha',
          wins: 2,
          losses: 0,
          goalsShot: 10,
          goalsReceived: 6
        },
        {
          id: 1,
          name: 'Beta',
          wins: 0,
          losses: 1,
          goalsShot: 4,
          goalsReceived: 5
        },
        {
          id: 2,
          name: 'Delta',
          wins: 0,
          losses: 1,
          goalsShot: 2,
          goalsReceived: 5
        },
        {
          id: 3,
          name: 'Gamma',
          wins: 1,
          losses: 1,
          goalsShot: 7,
          goalsReceived: 7
        },
      ]
    );
    expect(actualState.games).toStrictEqual(
      [
        {
          id: 0,
          playerA: 'Alpha',
          playerB: 'Beta',
          scoreA: 5,
          scoreB: 4,
        },
        {
          id: 1,
          playerA: 'Delta',
          playerB: 'Gamma',
          scoreA: 2,
          scoreB: 5,
        },
        {
          id: 2,
          playerA: 'Gamma',
          playerB: 'Alpha',
          scoreA: 2,
          scoreB: 5,
        },
      ]
    )
  });
});