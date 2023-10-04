const basePath = '/api/v1';

const loginPath = () => [basePath, 'login'].join('/');
const signUpPath = () => [basePath, 'signUp'].join('/');

export { loginPath, signUpPath };
