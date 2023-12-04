import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useFormik } from 'formik';

const SignUpForm = ({ validation }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validation,
    onSubmit: (values) => console.log(values),
  });

  const { username, password, confirmPassword } = formik.values;
  const {
    handleSubmit,
    handleChange,
    touched,
    errors,
  } = formik;

  return (
    <Form className="w-50" onSubmit={handleSubmit}>
      <h1 className="text-center mb-4">Регистрация</h1>
      <Form.Group className="form-floating mb-3">
        <FloatingLabel
          label="Имя пользователя"
        >
          <Form.Control
            placeholder=""
            name="username"
            autoComplete="username"
            required=""
            id="username"
            className={['form-control', errors.username ? 'is-invalid' : '']}
            value={username}
            onChange={handleChange}
          />
          {touched.username
            && errors.username
            && <Form.Text className="invalid-tooltip d-block">{errors.username}</Form.Text>}
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="form-floating mb-3">
        <FloatingLabel label="Пароль">
          <Form.Control
            placeholder=""
            name="password"
            aria-describedby="passwordHelpBlock"
            required=""
            autoComplete="new-password"
            type="password"
            id="password"
            className={['form-control', errors.password ? 'is-invalid' : '']}
            value={password}
            onChange={handleChange}
          />
          {touched.password
            && errors.password
            && <Form.Text className="invalid-tooltip d-block">{errors.password}</Form.Text>}
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="form-floating mb-4">
        <FloatingLabel label="Подтвердите пароль">
          <Form.Control
            placeholder=""
            name="confirmPassword"
            required=""
            autoComplete="new-password"
            type="password"
            id="confirmPassword"
            className={['form-control', errors.confirmPassword ? 'is-invalid' : '']}
            values={confirmPassword}
            onChange={handleChange}
          />
          {touched.confirmPassword
            && errors.confirmPassword
            && <Form.Text className="invalid-tooltip d-block">{errors.confirmPassword}</Form.Text>}
        </FloatingLabel>
      </Form.Group>
      <Button type="submit" className="w-100 btn-outline-primary">
        Зарегистрироваться
      </Button>
    </Form>
  );
};

export default SignUpForm;
