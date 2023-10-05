import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import axios from 'axios';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginPath } from '../../routes/routes';
import { authorize } from '../../slices/authorizationSlice';

const LoginFormComponent = ({ validation }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState('pending');
  const controlClasses = classNames('form-constrol', loginStatus === 'unauthorized' ? 'is-invalid' : '');

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validation,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(loginPath(), values);
        const { token, username } = response.data;
        localStorage.setItem('Authorization', token);
        dispatch(authorize({ username }));
        setLoginStatus('authorized');
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
      <h1 className="text-center mb-4">Войти</h1>
      <Form.Group className="mb-3">
        <FloatingLabel
          label="Ваш ник"
          className="mb-3"
        >
          <Form.Control
            name="username"
            autoComplete="username"
            required=""
            placeholder="Ваш ник"
            id="username"
            className={controlClasses}
            onChange={handleChange}
            value={login}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-4">
        <FloatingLabel
          label="Пароль"
          className="mb-3"
        >
          <Form.Control
            name="password"
            autoComplete="current-password"
            required=""
            placeholder="Пароль"
            type="password"
            id="password"
            className={controlClasses}
            onChange={handleChange}
            value={password}
          />
          {loginStatus === 'unauthorized' && <Form.Text className="invalid-tooltip d-block">Неверные имя пользователя или пароль</Form.Text>}
        </FloatingLabel>
      </Form.Group>
      <Button variant="outline-primary" size="lg" type="submit">Войти</Button>
    </Form>
  );
};

export default LoginFormComponent;
