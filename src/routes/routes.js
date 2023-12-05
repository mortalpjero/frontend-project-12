const basePath = '/api/v1';

const loginPath = () => [basePath, 'login'].join('/');
const signUpPath = () => [basePath, 'signup'].join('/');
const dataPath = () => [basePath, 'data'].join('/');

export { loginPath, signUpPath, dataPath };
