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
      {
        "Alpha": {
          index: 0,
          wins: 2,
          losses: 0,
          goalsShot: 10,
          goalsReceived: 6
        },
        "Beta": {
          index: 1,
          wins: 0,
          losses: 1,
          goalsShot: 4,
          goalsReceived: 5
        },
        "Gamma": {
          index: 3,
          wins: 1,
          losses: 1,
          goalsShot: 7,
          goalsReceived: 7
        },
        "Delta": {
          index: 2,
          wins: 0,
          losses: 1,
          goalsShot: 2,
          goalsReceived: 5
        },
      }
    );
    expect(actualState.games).toStrictEqual(
      [
        {
          index: 0,
          playerA: 'Alpha',
          playerB: 'Beta',
          scoreA: 5,
          scoreB: 4,
        },
        {
          index: 1,
          playerA: 'Delta',
          playerB: 'Gamma',
          scoreA: 2,
          scoreB: 5,
        },
        {
          index: 2,
          playerA: 'Gamma',
          playerB: 'Alpha',
          scoreA: 2,
          scoreB: 5,
        },
      ]
    )
  });
});