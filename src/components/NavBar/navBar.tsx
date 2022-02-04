import React, { useState } from 'react';
import GameBoard from '../GameBoard/gameBoard';
import LeaderBoard from '../LeaderBoard/leaderBoard';
import './navBar.css'
const NavBar = () => {

    const [sideBar , changeside] = useState<boolean>(false);

    const changeSideBar = ()=>{
      changeside(!sideBar);
    }

  return (
    <>
      <LeaderBoard showBar={sideBar}/> 
     <nav>
      <div className="navbar">
        <div className="container nav-container">
            <input onClick={changeSideBar}className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
        </div>
      </div>
    </nav>      
    </>
  )
};

export default NavBar;
