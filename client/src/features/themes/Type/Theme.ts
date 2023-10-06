import type { Question } from './Question';

export type Theme = {
  id: number;
  title: string;
  Questions: Question[];
};

export type ThemeId = Theme['id'];
