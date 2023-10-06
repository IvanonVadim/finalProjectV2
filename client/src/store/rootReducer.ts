import { combineReducers } from 'redux';
import { themesReducer } from '../features/themes/reducer/reducer';

const rootReducer = combineReducers({
  themesState: themesReducer,
});

export default rootReducer;
