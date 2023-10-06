
import { combineReducers } from 'redux';


import userReducer from '../features/auth/reducer/reducer';
import { themesReducer } from '../features/themes/reducer/reducer';

const rootReducer = combineReducers({
  themesState: themesReducer,
  userState: userReducer,
});

export default rootReducer;
