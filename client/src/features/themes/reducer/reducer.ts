/* eslint-disable @typescript-eslint/default-param-last */
import type { Action } from './action';
import type { State } from './type';

export const initState: State = { themes: [] };

export const themesReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case 'themes/init':
      return {
        ...state,
        themes: action.payload,
      };
    default:
      return state;
  }
};
