import React from 'react';
import { useLocation } from 'react-router-dom';

const HeaderComponent = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">Hexlet Chat</a>
        {currentPath === '/' && <button type="button" className="btn btn-primary">Выйти</button>}
      </div>
    </nav>
  );
};

export default HeaderComponent;
