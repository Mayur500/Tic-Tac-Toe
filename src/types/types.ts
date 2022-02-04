export type leaderboardUserDataType = {
  player1: string,
  player2: string,
  results: string
};

export type usersRankingDataType = {
  leaderBoard: leaderboardUserDataType[],
};

export type playersDataType = {
  player1: null | string;
  player2: null | string;
}

export type gameDataType = {
  players: playersDataType;
  currentPlayer: null | number;
  winningResults: number;
  playerMovesHistory: number[];
  gameSquares: number[];
  backDrop: boolean;
}


