import React from 'react';
import { useTranslation } from 'react-i18next';

import HeaderComponent from '../header/HeaderComponent';
import SignUpForm from './SignUpForm';
import imgPath from '../../img/hexletSignUpImage.jpg';
import signUpSchema from './signUpValidation';

const SignUp = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderComponent />
      <div className="container-fluid h-100">
        <div className="row justify-content-center align-content-center h-100">
          <div className="col-12 col-md-8 col-xxl-6">
            <div className="card shadow-sm">
              <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
                <div>
                  <img src={imgPath} className="rounded-circle" alt={t('buttons.register')} />
                </div>
                <SignUpForm validation={signUpSchema} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
