import axios from 'axios';

const loginUser = async (values, path) => {
  const response = await axios.post(path(), values);
  const { token, username } = response.data;
  localStorage.setItem('Authorization', token);
  localStorage.setItem('username', username);
};

export default loginUser;
