import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as api from './api';

function Rega(): JSX.Element {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  console.log('');
  const nav = useNavigate();

  const dispatch = useDispatch();

  const rega = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api
      .regaFetch({ name, password })

      .then((data) => {
        dispatch({ type: 'user/rega', payload: data });
        data.message === 'ok' && nav('/game');
      })

      .catch((error) => console.log(error));
  };

  return (
    <div className="divRega">
      <form onSubmit={rega}>
        <input
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">rega</button>
      </form>
    </div>
  );
}

export default Rega;
