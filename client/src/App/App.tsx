import { Route, Routes } from 'react-router-dom';
import Rega from '../features/auth/Rega';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from '../features/navbar/Navbar';
import { useDispatch } from 'react-redux';
import ThemesList from '../features/themes/ThemesList';
import ThemePage from '../features/themes/ThemePage';


      






function App(): JSX.Element {

  const dispatch = useDispatch();

  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/themes" element={<ThemesList />} />
      <Route path="/" element={<Rega />} />


    </Routes>
  );
}

export default App;
