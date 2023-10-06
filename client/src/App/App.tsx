import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from '../features/navbar/Navbar';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
    </Routes>
  );
}

export default App;
