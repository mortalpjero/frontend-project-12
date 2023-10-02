import path from 'path';

const basePath = '/api/v1';

const loginPath = () => path.join(basePath, 'login');
const signUpPath = () => path.join(basePath, 'signUp');

export { loginPath, signUpPath };
