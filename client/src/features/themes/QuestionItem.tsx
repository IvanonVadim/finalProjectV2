import React, { useState } from 'react';
import type { Question } from './Type/Question';
import ModalWindow from './ModalWindow';

function QuestionItem({ question }: { question: Question }): JSX.Element {
  const [state, setState] = useState(false);
  const addState = (): void => {
    setState((prev)=>!prev);
  };
  console.log(state);

  return (
    <div>
      {!state ? (
        <div className="divCard" onClick={addState}>
          {question.price}
        </div>
      ) : (
        <div>
          <ModalWindow question={question} key={question.id} addState={addState} />
        </div>
      )}
    </div>
  );
}

export default QuestionItem;
