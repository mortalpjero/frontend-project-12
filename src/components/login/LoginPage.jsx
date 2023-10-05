import React from 'react';
import * as Yup from 'yup';
import imagePath from '../../img/hexletLoginImage.jpeg';

import LoginFormComponent from './loginFormComponent';
import HeaderComponent from '../header/HeaderComponent';

const SignupSchema = Yup.object().shape({
  username: Yup.string(),
  password: Yup.string(),
});

const LoginPage = () => (
  <div className="h-100" id="chat">
    <div className="d-flex flex-column h-100">
      <HeaderComponent />
      <div className="container-fluid h-100">
        <div className="row justify-content-center align-content-center h-100">
          <div className="col-12 col-md-8 col-xxl-6">
            <div className="card shadow-sm">
              <div className="card-body row p-5">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                  <img src={imagePath} className="rounded-circle" alt="Войти" />
                </div>
                <LoginFormComponent validation={SignupSchema} />
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
    </div>
    <div className="Toastify" />
  </div>
);

export default LoginPage;
