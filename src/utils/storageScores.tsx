import {
  leaderboardUserDataType,
} from '../types/types';

const saveScores = (matchData: leaderboardUserDataType) => {
  const usersLocalData = localStorage.getItem('leaderboard');
  let parseData: leaderboardUserDataType[] = [];
  if (usersLocalData !== null) {
    parseData = JSON.parse(usersLocalData);
  }

    const newmatchData = {
      player1: matchData.player1,
      player2: matchData.player2,
      results: matchData.results
    };
    parseData.push(newmatchData);

  localStorage.setItem('leaderboard', JSON.stringify(parseData));
  return parseData;
}
export default saveScores;
