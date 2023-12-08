import React from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import imagePath from '../../img/hexletLoginImage.jpeg';
import LoginFormComponent from './loginFormComponent';
import HeaderComponent from '../header/HeaderComponent';

const LoginSchema = Yup.object().shape({
  username: Yup.string(),
  password: Yup.string(),
});

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderComponent />
      <div className="container-fluid h-100">
        <div className="row justify-content-center align-content-center h-100">
          <div className="col-12 col-md-8 col-xxl-6">
            <div className="card shadow-sm">
              <div className="card-body row p-5">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <img src={imagePath} className="rounded-circle" alt={t('buttons.logIn')} />
                </div>
                <LoginFormComponent validation={LoginSchema} />
              </div>
              <div className="card-footer p-4">
                <div className="text-center">
                  <span>{t('noAcc')}</span>
                  <a href="/signup">{t('buttons.register')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
