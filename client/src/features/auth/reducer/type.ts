import type { User } from '../type';

export type State = {
  user: User | null;
  errUser: string;
};
