import React, { useState } from 'react';
import './backdrop.css';
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/hooks';

const Backdrop = () => {

  const {
    backDrop
  } = useAppSelector((state) => state.gameData);
  return (
    <div className={`bd01Open ${backDrop? 'bd01Close' : ''}`}> </div>
  )
}

export default Backdrop;
