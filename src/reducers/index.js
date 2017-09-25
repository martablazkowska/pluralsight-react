import {combineReducers} from 'redux';
import games from './gameReducers';

const rootReducer = combineReducers({
  games
});

export default rootReducer;