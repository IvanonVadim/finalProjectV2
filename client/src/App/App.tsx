import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Rega from '../features/auth/Rega';

import Navbar from '../features/navbar/Navbar';
import ThemesList from '../features/themes/ThemesList';

function App(): JSX.Element {


  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
      <Route index element={<Rega />} />
      <Route path="/themes" element={<ThemesList />} />
      </Route>
    </Routes>
  );
}

export default App;
