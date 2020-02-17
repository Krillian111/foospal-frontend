export function parseCsvToPlayers(csvAsText) {

    const games = csvAsText
        .split('\n')
        .filter(line => !line.includes('Team'))
        .map(line => line.split(','))
        .map(line => { return {
            playerA: line[0],
            playerB: line[1],
            scoreA: line[2],
            scoreB: line[3],
        }});
    return games;
}