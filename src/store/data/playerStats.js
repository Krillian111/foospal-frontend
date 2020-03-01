export class PlayerStats {

  constructor({id, name, wins=0, losses=0, closeGames=0, points=0, pointsWithCloseScores=0, goalsShot=0, goalsReceived=0}) {
    this.id = id;
    this.name = name;
    this.wins = wins;
    this.losses = losses;
    this.closeGames = closeGames;
    this.points = points;
    this.pointsWithCloseScores = pointsWithCloseScores;
    this.goalsShot = goalsShot;
    this.goalsReceived = goalsReceived;
  }
}

// seperate functions cause redux recommends using data only in store

export const mapToCloseGameRate = (stats) => {
  return stats.closeGames/(stats.wins+stats.losses);
}

export const mapToGoalDifference = (stats) => {
  return stats.goalsShot - stats.goalsReceived;
}

export const mapToPointsAvg = (stats) => {
  return stats.points/(stats.wins+stats.losses);
}

export const mapToPointsCloseAvg = (stats) => {
  return stats.pointsWithCloseScores/(stats.wins+stats.losses);
}

export const mapToWinRate = (stats) => {
  return stats.wins/(stats.wins+stats.losses);
}

export const updatePlayerFromSingleGame = (currentPlayerStats, singleGame) => {
  currentPlayerStats.goalsShot += singleGame.playerScore;
  currentPlayerStats.goalsReceived += singleGame.opponentScore;
  currentPlayerStats.closeGames += singleGame.closeGame;
  if(singleGame.win) {
    currentPlayerStats.wins += 1;
    currentPlayerStats.points += 3;
    currentPlayerStats.pointsWithCloseScores += singleGame.closeGame ? 2 : 3;
  } else {
    currentPlayerStats.losses += 1;
    if(singleGame.closeGame) {
      currentPlayerStats.pointsWithCloseScores += 1;
    }
  }
}