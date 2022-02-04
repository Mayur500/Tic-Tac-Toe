import {
  gameDataType,
  playersDataType,
} from '../../types/types';
import results from '../../utils/helpers';

const initialState: gameDataType = {
  players: {
    player1: null,
    player2: null,
  },
  currentPlayer: null,
  winningResults: 0,
  backDrop:false,
  playerMovesHistory: [],
  gameSquares: Array(9).fill(0),
};

const GameReducer = (
  state: gameDataType = initialState,
  action: { type: string, payload?: playersDataType | number }
) => {
  switch (action.type) {
    case 'START_GAME':
      const playersData = action.payload as playersDataType;
      return {
        ...state,
        players: {
          player1: playersData.player1,
          player2: playersData.player2,
        },
        currentPlayer: 1,
      };

    case 'CURRENT_TURN':
      const newgameSquares = [...state.gameSquares];
      const currentPosition = action.payload as number;
      if (state.currentPlayer !== null) {
        newgameSquares[currentPosition] = state.currentPlayer;

        return {
          ...state,
          currentPlayer: state.currentPlayer === 1 ? 2 : 1,
          winningResults: results(newgameSquares),
          playerMovesHistory: [...state.playerMovesHistory, currentPosition],
          gameSquares: newgameSquares,
        };
      }
      return {
        ...state,
      };

    case 'UNDO_MOVE':
      const oldgameSquares = [...state.gameSquares];
      const lastPlayedSquare = state.playerMovesHistory[state.playerMovesHistory.length - 1];
      oldgameSquares[lastPlayedSquare] = 0;
      const newplayerMovesHistory = [...state.playerMovesHistory];
      newplayerMovesHistory.pop();

      if (state.winningResults === 0 && state.playerMovesHistory.length !== 0) {
        return {
          ...state,
          currentPlayer: state.currentPlayer === 1 ? 2 : 1,
          gameSquares: oldgameSquares,
          playerMovesHistory: newplayerMovesHistory
        };
      }
      return {
        ...state,
        undoOrReset: action.payload === 0 ? 0 : 1
      };

    case 'RESET_GAME':
      return {
        ...state,
        currentPlayer: 1,
        winningResults: 0,
        playerMovesHistory: [],
        gameSquares: Array(9).fill(0)
      };
    case 'BACK_DROP':
      return {
        ...state,
        backDrop: !state.backDrop
      };

    case 'NEW_GAME':
      return {
        ...state,
        players: {
          player1: null,
          player2: null,
        },
        currentPlayer: 1,
        winningResults: 0,
        playerMovesHistory: [],
        gameSquares: Array(9).fill(0),
      };
    default:
      return {
        ...state,
      };
  };
};

export default GameReducer;
