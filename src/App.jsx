import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmptyPage from './components/empty/EmptyPage';
import LoginPage from './components/login/LoginPage';
import ChatPage from './components/chat/ChatPage';
import SignUp from './components/signUp/SignUp';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<EmptyPage />} />
      <Route path="/" element={<ChatPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

export default App;
