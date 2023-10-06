import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import * as api from './api';
import QuestionItem from './QuestionItem';

function ThemesList(): JSX.Element {
  const themes = useSelector((store: RootState) => store.themesState.themes);

  const dispatch = useDispatch();

  useEffect(() => {
    api
      .loadFetch()
      .then((data) => dispatch({ type: 'themes/init', payload: data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {themes.map((theme) => (
        <div key={theme.id} className='themeDiv'>
          <div>{theme.title}</div>
          <div className='questionsDiv'>
            {theme.Questions.map((question) => (
              <QuestionItem key={question.id} question={question} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThemesList;
