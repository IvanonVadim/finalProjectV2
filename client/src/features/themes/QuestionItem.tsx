import React from 'react';
import type { Question } from './Type/Question';

function QuestionItem({ question }: { question: Question }): JSX.Element {
  return <div>{question.price}</div>;
}

export default QuestionItem;
