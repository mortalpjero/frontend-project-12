import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import imagePath from '../../img/hexletLoginImage.jpeg';

import LoginFormComponent from './loginFormComponent';
import HeaderComponent from '../header/HeaderComponent';

const LoginSchema = Yup.object().shape({
  username: Yup.string(),
  password: Yup.string(),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('Authorization');

  useEffect(() => {
    if (authToken) {
      navigate('/');
    }
  });
  return (
    <>
      <HeaderComponent />
      <div className="container-fluid h-100">
        <div className="row justify-content-center align-content-center h-100">
          <div className="col-12 col-md-8 col-xxl-6">
            <div className="card shadow-sm">
              <div className="card-body row p-5">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <img src={imagePath} className="rounded-circle" alt="Войти" />
                </div>
                <LoginFormComponent validation={LoginSchema} />
              </div>
              <div className="card-footer p-4">
                <div className="text-center">
                  <span>Нет аккаунта?</span>
                  <a href="/signup">Регистрация</a>
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
