export class SingleGame {
    constructor({ id, playerA, playerB, scoreA, scoreB }) {
        this.id = id;
        this.playerA = playerA;
        this.playerB = playerB;
        this.scoreA = scoreA;
        this.scoreB = scoreB;
    }
}

export const fromPerspectiveOfA = (singleGame) => {
    return mapToSubjectiveGame(singleGame, true);
};

export const fromPerspectiveOfB = (singleGame) => {
    return mapToSubjectiveGame(singleGame, false);
};

const mapToSubjectiveGame = (singleGame, forPlayerA) => {
    let playerName;
    let win;
    let playerScore;
    let opponentScore;
    if (forPlayerA) {
        playerName = singleGame.playerA;
        win = singleGame.scoreA > singleGame.scoreB;
        playerScore = singleGame.scoreA;
        opponentScore = singleGame.scoreB;
    } else {
        playerName = singleGame.playerB;
        win = singleGame.scoreB > singleGame.scoreA;
        playerScore = singleGame.scoreB;
        opponentScore = singleGame.scoreA;
    }
    return {
        playerName,
        win,
        playerScore,
        opponentScore,
        closeGame: Math.abs(singleGame.scoreA - singleGame.scoreB) <= 1,
    };
};
