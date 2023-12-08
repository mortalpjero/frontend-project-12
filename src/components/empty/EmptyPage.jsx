import React from 'react';
import { useTranslation } from 'react-i18next';

const EmptyPage = () => {
  const { t } = useTranslation();

  return (
    <div className="h-100" id="chat">
      <div className="d-flex flex-column h-100">
        <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <a className="navbar-brand" href="/">
              {t('hexlet')}
            </a>
          </div>
        </nav>
        <div className="text-center">
          <img
            alt={t('notFound.page')}
            className="img-fluid h-25"
            src="https://cdn2.hexlet.io/assets/error-pages/404-4b6ef16aba4c494d8101c104236304e640683fa9abdb3dd7a46cab7ad05d46e9.svg"
          />
          <h1 className="h4 text-muted">{t('notFound.page')}</h1>
          <p className="text-muted">
            {t('notFound.redirect')}
            <a href="/">{t('notFound.mainPage')}</a>
          </p>
        </div>
      </div>
      <div className="Toastify" />
    </div>
  );
};

export default EmptyPage;
