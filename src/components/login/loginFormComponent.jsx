import React from 'react';
import { useFormik } from 'formik';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const LoginFormComponent = ({ validation }) => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: validation,
    onSubmit: (values) => {
      console.log(values.login);
    },
  });

  const { login, password } = formik.values;
  const { errors, touched, handleChange } = formik;

  return (
    <Form onSubmit={formik.handleSubmit} className="d-grid col-12 col-md-6 mt-3 mt-mb-0">
      <h1 className="text-center mb-4">Войти</h1>
      <Form.Group className="mb-3">
        <FloatingLabel
          label="Ваш ник"
          className="mb-3"
        >
          <Form.Control
            name="login"
            autoComplete="username"
            required=""
            placeholder="Ваш ник"
            id="username"
            className="form-control"
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
            className="form-control"
            onChange={handleChange}
            value={password}
          />
        </FloatingLabel>
        {(errors.password && touched.password) || (errors.login && touched.login) ? (
          <div className="invalid-tooltip">Логин и Пароль должны иметь минимум 5 символов!</div>
        ) : null}
      </Form.Group>
      <Button variant="outline-primary" size="lg" type="submit">Войти</Button>
    </Form>
  );
};

export default LoginFormComponent;
