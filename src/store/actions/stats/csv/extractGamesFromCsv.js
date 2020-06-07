import { SingleGame } from '../../../data/singleGame';

export const EXTRACT_GAMES_FROM_CSV = 'EXTRACT_GAMES_FROM_CSV';

export const extractGamesFromCsv = (csvAsText) => ({
  type: EXTRACT_GAMES_FROM_CSV,
  games: parseCsvToPlayers(csvAsText),
});

function parseCsvToPlayers(csvAsText) {
  const games = csvAsText
    .split('\n')
    .filter((line, index) => index !== 0)
    .filter((line) => line.split(',').length === 4)
    .map((line) => line.split(','))
    .map((line, index) => {
      return new SingleGame({
        id: index,
        playerA: line[0],
        playerB: line[1],
        scoreA: parseInt(line[2]),
        scoreB: parseInt(line[3]),
      });
    });
  return games;
}
