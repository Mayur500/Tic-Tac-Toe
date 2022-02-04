import { playersDataType } from '../../types/types';
import {
  NEW_GAME,
  CURRENT_TURN,
  RESET_GAME,
  START_GAME,
  UNDO_MOVE,
  BACK_DROP
} from '../actionTypes/gameActionTypes';

export const initializeGame = (players: playersDataType) => {
  return {
    type: START_GAME,
    payload: {
      ...players,
    },
  };
};

export const currentTurn = (squareId: number) => {
  return {
    type: CURRENT_TURN,
    payload: squareId,
  };
};

export const undoTurn = () => {
  return {
    type: UNDO_MOVE
  };
};

export const resetGame = () => {
  return {
    type: RESET_GAME,

  };
};

export const startNewGame = () => {
  return {
    type: NEW_GAME,
  };
};


export const BackDrop = () => {
  return {
    type: BACK_DROP,
  }
};

