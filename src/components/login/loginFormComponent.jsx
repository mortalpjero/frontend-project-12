import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { authorize } from '../../slices/authorizationSlice';
import { loginPath } from '../../routes/routes';
import loginUser from '../../services/loginUser';

const LoginFormComponent = ({ validation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState('pending');
  const controlClasses = classNames('form-control', loginStatus === 'unauthorized' ? 'is-invalid' : '');

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validation,
    onSubmit: async (values) => {
      const { username } = values;
      try {
        await loginUser(values, loginPath);
        setLoginStatus('authorized');
        dispatch(authorize({ username }));
        navigate('/');
      } catch (e) {
        setLoginStatus('unauthorized');
      }
    },
  });

  const { login, password } = formik.values;
  const { handleChange } = formik;

  return (
    <Form onSubmit={formik.handleSubmit} className="d-grid col-12 col-md-6 mt-3 mt-mb-0">
      <h1 className="text-center mb-4">{t('buttons.logIn')}</h1>
      <Form.Group className="mb-3">
        <FloatingLabel
          label={t('userInfo.login')}
          className="mb-3"
        >
          <Form.Control
            name="username"
            autoComplete="username"
            required=""
            placeholder={t('userInfo.login')}
            id="username"
            className={controlClasses}
            onChange={handleChange}
            value={login}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-4">
        <FloatingLabel
          label={t('userInfo.password')}
          className="mb-3"
        >
          <Form.Control
            name="password"
            autoComplete="current-password"
            required=""
            placeholder={t('userInfo.password')}
            type="password"
            id="password"
            className={controlClasses}
            onChange={handleChange}
            value={password}
          />
          {loginStatus === 'unauthorized' && <Form.Text className="invalid-tooltip d-block">{t('errors.wrongLoginInfo')}</Form.Text>}
        </FloatingLabel>
      </Form.Group>
      <Button variant="outline-primary" size="lg" type="submit">{t('buttons.logIn')}</Button>
    </Form>
  );
};

export default LoginFormComponent;
