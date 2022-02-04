
import './leaderBoard.css';

import React from 'react';

import userIcon from '../../assets/images/userIcon.png';
import { useAppSelector } from '../../store/hooks';
import { leaderboardUserDataType } from '../../types/types';

interface IfirstChildProps {
  showBar: boolean
}


const LeaderBoard : React.FC<IfirstChildProps> = ({showBar}) => {
  const {
    leaderBoard
  } = useAppSelector((state) => state.leaderBoard);
  return (
    <>
      <div className={`lb01OuterContainer ${!showBar &&'lb01OuterContainerNav'}`}>
        <h2 className='m01Heading'>
          LeaderBoard
        </h2>
        <div className="lb01UsersContainer">
          {leaderBoard.map((userDetails, index) => (
            <React.Fragment key={`${userDetails.player1}_${index}_${userDetails.player2}`}>
              <div className='lb01UserContainer'>
                <img src={userIcon} alt='User Icon' style={{filter: "blur(1px)"}} />
                <div className='lb01User'>
                  <h6 className='lb01UserName'>
                   { `${userDetails.player1}`}  <i> v/s </i> {`${userDetails.player2}`}
      
                  </h6>
                  <p className='lb01UserDetails'>
                    {userDetails.results === null ? 'Draw' : `Winner - ${userDetails.results}`}
                  </p>
                </div>
              </div>
              <hr />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
};

export default LeaderBoard;
