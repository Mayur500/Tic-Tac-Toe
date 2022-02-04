import {
  combineReducers,
  createStore,
} from 'redux';

import gameReducer from './reducers/gameReducer';
import leaderBoardReducer from './reducers/leaderBoardReducer';

const reducer = combineReducers({
  gameData: gameReducer,
  leaderBoard: leaderBoardReducer,
});

const store = createStore(reducer);

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
