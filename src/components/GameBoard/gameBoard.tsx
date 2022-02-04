import './gameBoard.css';
import React, { useState } from 'react';
import {
  currentTurn,
  undoTurn,
  resetGame,
  startNewGame,
  BackDrop
} from '../../store/actions/gameActions';

import {
  useAppDispatch,
  useAppSelector,
} from '../../store/hooks';

const GameBoard = () => {

  const dispatch = useAppDispatch();
  const {
    players,
    currentPlayer,
    winningResults,
    backDrop,
    playerMovesHistory,
    gameSquares
  } = useAppSelector((state) => state.gameData);

  const renderSquares = (gameSquares: number[]) => {
    const squaresArray = [];

    for (let index = 0; index < 9; index++) {
      squaresArray.push(
        <div
          className='gb01Squares'
          key={index}
          data-id={index}
          data-move={gameSquares[index]}
          onClick={boardSquareOnClick}
        >
          {gameSquares[index] !== 0 && (
            <>
              {gameSquares[index] === 1 ? (
                <>✕</>
              ) : (
                <>〇</>
              )}
            </>)}
        </div>
      )
    }
    return squaresArray;
  }


  const boardSquareOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (winningResults === 0) {
      const gameboardSquare = e.target as HTMLElement;
      if (gameboardSquare.dataset.move === '0') {
        dispatch(currentTurn(
          Number(gameboardSquare.dataset.id)
        ))
      }
    }
  }
  
  return (
    <div className='ggb01Container'>
      <h2 className='m01Heading gb01Header'>
        <i>Let's Play</i>
      </h2>
      <div className="gb01OuterContainer">
        <div className={`gb01PlayerDetails ${currentPlayer === 1 ? 'gb01border' : ' '}`}>
          <img src={`https://avatars.dicebear.com/api/avataaars/${players.player1}.svg`} alt='photo' className={`gb01UserIcon ${currentPlayer === 1 ? 'gb01border' : ' '}`} />
          <p>{players.player1}</p>
          <p><small>✕</small></p>
        </div>
        <div className='gb01Container'>
          {renderSquares(gameSquares)}
        </div>
        <div className={`gb01PlayerDetails ${currentPlayer === 2 ? 'gb01border' : ' '}`}>
          <img src={`https://avatars.dicebear.com/api/avataaars/${players.player2}.svg`} alt='photo' className={`gb01UserIcon ${currentPlayer === 2 ? 'gb01border' : ' '}`}/>
          <p>{players.player2}</p>
          <p><small>〇</small></p>
        </div>
      </div>
  
        
  
  
      <div className='gb01ButtonsContainer'>
        <button
          className={`primary-button gb01Buttons ${playerMovesHistory.length && 'gb01Buttons-undo'} `}
          onClick={()=>{dispatch(undoTurn())}}
        >
          Undo
        </button>
        <button
          className={`primary-button gb01Buttons ${playerMovesHistory.length && 'gb01Buttons-undo'} `}
          onClick={() => dispatch(resetGame())}
        >
          Restart
        </button>
      </div>
    </div>
  )
}

export default GameBoard;
