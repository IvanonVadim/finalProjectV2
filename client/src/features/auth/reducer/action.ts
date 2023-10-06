import type { User } from '../type';

export type Action = {
  type: 'user/rega';
  payload: User;
};
