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

                },
                "Beta": {

                },
                "Gamma": {

                },
                "Delta": {

                },
            }
        );
    });
});