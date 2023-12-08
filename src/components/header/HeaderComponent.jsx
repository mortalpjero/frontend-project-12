import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeaderComponent = () => {
  const { t } = useTranslation();
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
        <a className="navbar-brand" href="/">{t('hexlet')}</a>
        {currentPath === '/' && <button type="button" className="btn btn-primary" onClick={handleExit}>{t('buttons.logOut')}</button>}
      </div>
    </nav>
  );
};

export default HeaderComponent;
