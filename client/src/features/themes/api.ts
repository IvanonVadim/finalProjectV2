import type { User } from '../auth/type';
import type { Answer, Obj } from './Type/Question';
import type { Theme } from './Type/Theme';

export const loadFetch = async (): Promise<Theme[]> => {
  const data = await (await fetch('/api/themes/car')).json();
  return data.themes;
};
export const asFetch = async (obj: Obj): Promise<{ user: User; message: string }> => {
  const data = await (
    await fetch('/api/themes', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    })
  ).json();
  return data;
};
