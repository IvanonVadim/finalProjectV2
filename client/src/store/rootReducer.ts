import { combineReducers } from 'redux';
import userReducer from '../features/auth/reducer/reducer';

const rootReducer = combineReducers({
  userState: userReducer
});

export default rootReducer;
