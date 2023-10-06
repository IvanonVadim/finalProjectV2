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

export const werificationFetch = async (): Promise<User> => {
  const data = await (await fetch(`/api/auth/wer`)).json();
  return data;
};

export const logoutFetch = async (): Promise<{ message: string }> => {
  const data = await (await fetch(`/api/auth/logout`)).json();
  return data;
};

export const autorizFetch = async (obj: Reg): Promise<{ message: string; user: User }> => {
  const data = await (
    await fetch(`/api/auth/aut`, {
      method: 'post',
      body: JSON.stringify(obj),
      headers: { 'content-type': 'application/json' },
    })
  ).json();
  return data;
};
