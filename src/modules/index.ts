import { combineReducers } from 'redux';
import color from './color';
import signin from './signin';
import timer from './timer';
import selected from './selected';
import setting from './setting';

const rootReducer = combineReducers({
  color,
  signin,
  timer,
  selected,
  setting
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
