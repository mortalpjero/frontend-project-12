import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmptyPage from './components/empty/EmptyPage';
import LoginPage from './components/login/LoginPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<EmptyPage />} />
      <Route path="/" />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
