import { Route, Routes } from 'react-router-dom';
import Rega from '../features/auth/Rega';
import './App.css';

import React from 'react';

function App(): JSX.Element {
  // const dispatch = useDispatch()

  return (
    <Routes>
      <Route path="/" element={<Rega />} />
    </Routes>
  );
}

export default App;
