import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import HeaderComponent from '../header/HeaderComponent';
import SignUpForm from './SignUpForm';
import imgPath from '../../img/hexletSignUpImage.jpg';

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .required('Обязательное поле')
    .min(3, 'Имя должно быть от 3 до 20 символов')
    .max(20, 'Имя должно быть от 3 до 20 символов'),
  password: Yup.string()
    .required('Обязательное поле')
    .min(6, 'Не менее 6 символов'),
  confirmPassword: Yup.string()
    .required('Обязательное поле')
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
});

const SignUp = () => {
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
              <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
                <div>
                  <img src={imgPath} className="rounded-circle" alt="Зарегестрироваться" />
                </div>
                <SignUpForm validation={SignUpSchema} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
