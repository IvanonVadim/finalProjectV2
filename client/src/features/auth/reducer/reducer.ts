/* eslint-disable @typescript-eslint/default-param-last */
import type { Action } from './action';
import type { State } from './type';

const initialState: State = { user: null, errUser: '' };

const userReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'user/rega':
      if ('user' in action.payload) {
        return {
          ...state,
          user: action.payload.user,
          errUser: '',
        };
      }
      return {
        ...state,
        errUser: action.payload.message,
      };

    default:
      return state;
  }
};
export default userReducer;
