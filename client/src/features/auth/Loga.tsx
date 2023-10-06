import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as api from './api';

function Loga(): JSX.Element {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [osh, setOsh] = useState(true);
  const nav = useNavigate();

  const dispatch = useDispatch();

  const aotoriz = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    api.autorizFetch({ name, password }).then((data) => {
      dispatch({ type: 'user/autoriz', payload: data });
      if (data.message === 'ok') {
        nav('/game');
      } else {
        setOsh(!osh);
      }
    }, []);
  };

  return (
    <div className="divRega">
      <form onSubmit={aotoriz}>
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
        <button type="submit">save</button>
        {!osh && <div style={{ color: 'red' }}>ошибка</div>}
      </form>
    </div>
  );
}

export default Loga;
