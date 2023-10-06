import type { Reg, User } from './type';

export const regaFetch = async (obj: Reg): Promise<{ message: string; user: User }> => {
  const data = await (
    await fetch(`/api/auth/reg`, {
      method: 'post',
      body: JSON.stringify(obj),
      headers: { 'content-type': 'application/json' },
    })
  ).json();
  return data;
};
