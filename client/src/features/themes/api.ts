import type { Theme } from './Type/Theme';

export const loadFetch = async (): Promise<Theme[]> => {
  const data = await (await fetch('/api/themes/car')).json();
  return data.themes;
};
