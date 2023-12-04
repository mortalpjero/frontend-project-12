import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleExit = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">Hexlet Chat</a>
        {currentPath === '/' && <button type="button" className="btn btn-primary" onClick={handleExit}>Выйти</button>}
      </div>
    </nav>
  );
};

export default HeaderComponent;
