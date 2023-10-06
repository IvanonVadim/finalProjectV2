




  

import userReducer from '../features/auth/reducer/reducer';
import { themesReducer } from '../features/themes/reducer/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  themesState: themesReducer,
  userState: userReducer
});

export default rootReducer;
