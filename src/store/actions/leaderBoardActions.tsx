import { leaderboardUserDataType } from '../../types/types';
import { UPDATE_LEADERBOARD } from '../actionTypes/leaderBoardActionTypes';

export function updateLeaderboard(usersData: leaderboardUserDataType) {
  return {
    type: UPDATE_LEADERBOARD,
    payload: usersData,
  }
};
