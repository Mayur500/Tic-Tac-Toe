import './resultsModal.css';

import { useEffect } from 'react';
import winner from '../../assets/images/winner.gif'
import {
  resetGame,
  startNewGame,
  BackDrop
} from '../../store/actions/gameActions';
import { updateLeaderboard } from '../../store/actions/leaderBoardActions';
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/hooks';

const ResultsModal = () => {
  const dispatch = useAppDispatch();
  const {
    players,
    winningResults,
  } = useAppSelector((state) => state.gameData);

  let whoWon: string | null = null
  if (winningResults === 1) {
    whoWon = players.player1;
  } else if(winningResults === 2) {
    whoWon = players.player2;
  }

  useEffect(() => {
     
    dispatch(updateLeaderboard({
      player1: String(players.player1),
      player2: String(players.player2),
      results: whoWon === null ? 'Draw' : whoWon,
    }))
  }, [])

  const buttonOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, isNewGame: boolean) => {
    e.preventDefault();
    if (isNewGame) {
      dispatch(startNewGame());
      dispatch(BackDrop());
    } else {
      dispatch(resetGame());

    }
  }

  return (
    <>
    <div className="mo1BackDrop"></div>
      <div className='m01OuterContainer'>
        <div className='m01Container'>
          <h3 className='m01Heading'>
            {winningResults === -1 && (
              <>It's a Draw</>
            )}
            {winningResults !== -1 && (
              <>{
                winningResults === 1 ? players.player1 : players.player2
              } Won!
              </>
            )}
          </h3>
          <div className='winner-trophy'>
            {winningResults !== -1 ? <img
              src={winner}
              alt="winner...."
            /> : null
            }
          </div>
          <div className='rm01ButtonContainer'>
            <button className='primary-button rm01Button' onClick={(e) => buttonOnClick(e, true)}>
              New Game
            </button>
            <button className='primary-button rm01Button' onClick={(e) => buttonOnClick(e, false)}>
              Play Again
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultsModal;
