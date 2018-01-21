import {combineReducers} from 'redux';
import orderReducers from './order';
import waldoReducers from './waldo';

const rootReducer = combineReducers({
  order: orderReducers,
  waldo: waldoReducers
});

export default rootReducer;
