import './App.css';
import React, { useDeferredValue, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as api from '../features/auth/api';

import Rega from '../features/auth/Rega';

import Navbar from '../features/navbar/Navbar';
import ThemesList from '../features/themes/ThemesList';
import Loga from '../features/auth/Loga';

function App(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    api.werificationFetch().then((data) => dispatch({ type: 'user/werification', payload: data }));
    return () => console.log('clear');
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Rega />} />
        <Route path="/themes" element={<ThemesList />} />
        <Route path="/game" element={<ThemesList />} />
        <Route path="/aotoriz" element={<Loga />} />
      </Route>
    </Routes>
  );
}

export default App;
