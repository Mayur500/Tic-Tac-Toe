import './home.css';

import GameBoard from '../../components/GameBoard/gameBoard';
import LeaderBoard from '../../components/LeaderBoard/leaderBoard';
import DetailsModal from '../../components/DetailsModal/detailsModal';
import ResultsModal from '../../components/ResultsModal/resultsModal';
import NavBar from '../../components/NavBar/navBar';
import { useAppSelector } from '../../store/hooks';
import BackDrop from '../../ui/BackDrop/Backdrop';
import { useEffect, useState } from 'react';

const Home = () => {

  const [width, setWidth] = useState(window.innerWidth);

 const updateDimensions = () => {
    setWidth( window.innerWidth);
  };

  useEffect(() => { 
    window.addEventListener('resize',updateDimensions);
  },[]);

  const {
    players,
    winningResults,
  } = useAppSelector((state) => state.gameData);

  const playersexists = players.player1 === null && players.player2 === null;

  return (
    <>
      {winningResults!==0 && (<ResultsModal />)}
      {playersexists && (<DetailsModal />)}
      <BackDrop />
      <div className='hh01Container'>
        {width< 933 &&  <NavBar/>}
        <h1 className='hh01Text'> Tic Tac Toe 👾</h1>
      </div>
      <main className='hm01Container'>
        <GameBoard />
      {width && <LeaderBoard showBar={false}/>}
      
      </main>
    </>
  )
}

export default Home;
