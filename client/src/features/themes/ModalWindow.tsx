import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { Question } from './Type/Question';
import * as api from './api';

function ModalWindow({
  question,
  addState,
}: {
  question: Question;
  addState: () => void;
}): JSX.Element {
  const [text, setText] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const getAnswer = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api.asFetch({ answer: text, id: question.id }).then((data) => {
      dispatch({ type: 'user/score', payload: data.user });
      setComment(data.message)
    });
   
  };
// const modaloff=():void=>{
//     modal.style.display='none'
// }


  return (
    <div>
      <div>{question.content}</div>
      <form onSubmit={getAnswer}>
        <input
          name="answer"
          value={text}
          placeholder="ответ"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
      {comment === 'тупик' ? (
        <>
          <div>{comment}</div> <div>{question.answer}</div>
        </>
      ) : (
        <div>{comment}</div>
      )}
      <button type='button' onClick={addState}>ok</button>
    </div>
  );
}

export default ModalWindow;
