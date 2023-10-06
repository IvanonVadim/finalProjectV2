import { User } from '../type';


export type Action =
  | { type: 'user/rega';payload: User;}
  | {type: 'user/score';payload: User};
  | { type: 'user/werification'; payload: User }
  | { type: 'user/logout'; payload: { message: string } }
  | { type: 'user/autoriz'; payload: User };
