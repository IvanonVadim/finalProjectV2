import './App.css';
import { useDispatch } from 'react-redux';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ThemesList from '../features/themes/ThemesList';
import ThemePage from '../features/themes/ThemePage';

function App(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <Routes>
      <Route path="/themes" element={<ThemesList />} />
    </Routes>
  );
}

export default App;
