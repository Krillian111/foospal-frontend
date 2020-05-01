import fs from 'fs';
import gameData from '../gameData';
import { ACTION_PARSE_CSV } from '../../actions/parseCsv';
import { PlayerStats } from '../../data/playerStats';
import { SingleGame } from '../../data/singleGame';

describe('gameData', () => {
    const testCsvFile = fs
        .readFileSync(`${process.cwd()}/src/store/reducers/test/testData.csv`)
        .toString();

    test('file is mapped to playerStats', () => {
        const actualState = gameData(
            {},
            {
                type: ACTION_PARSE_CSV,
                csvAsText: testCsvFile,
            }
        );
        expect(actualState.playerStats).toStrictEqual([
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
