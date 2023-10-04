import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ChatPage = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('Authorization');
  const username = useSelector((state) => state.authorizationInfo.username);
  const userToken = useSelector((state) => state.authorizationInfo.token);
  console.log(authToken);

  useEffect(() => {
    if (!authToken) {
      navigate('/login');
    }
  }, [authToken, navigate]);

  return (
    <>
      <p>This is the user name:</p>
      <div>{username}</div>
      <p>This is the user token:</p>
      <div>{userToken}</div>
    </>
  );
};

export default ChatPage;
