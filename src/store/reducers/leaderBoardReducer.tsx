import {
  leaderboardUserDataType,
  usersRankingDataType,
} from '../../types/types';
import storageScores from '../../utils/storageScores';

let localLeaderboard: leaderboardUserDataType[] = [];
if (localStorage.getItem('leaderboard') !== null) {
  localLeaderboard = [...JSON.parse(localStorage.getItem('leaderboard') as string )]
}

const initialState: usersRankingDataType = {
  leaderBoard: localLeaderboard,
};

const usersRankingReducer = (
  state = initialState,
  action: { type: string, payload: leaderboardUserDataType }
) => {
  switch (action.type) {
    case 'UPDATE_LEADERBOARD':
      return {
        ...state,
        leaderBoard: storageScores(action.payload),
      }
    default:
      return {
        ...state,
      }
  }
}

export default usersRankingReducer;
