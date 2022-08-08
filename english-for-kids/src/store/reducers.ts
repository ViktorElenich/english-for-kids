import { combineReducers } from 'redux';
import { mode } from './switchMode';
import { trainCard } from './trainCard';

export default combineReducers({
  mode,
  trainCard,
});
