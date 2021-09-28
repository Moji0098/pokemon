import {combineReducers} from 'redux';
import {user} from '../reducers/user';
import {favorites} from '../reducers/favorites';

const rootReducer = combineReducers({
  user,
  favorites,
});
export default rootReducer;
