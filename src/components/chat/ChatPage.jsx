import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import getData from './getData';
import { addChannel } from '../../slices/channelsSlice';
import { addMessage } from '../../slices/messagesSlice';
import HeaderComponent from '../header/HeaderComponent';
import ChannelsComponent from '../channels/ChannelsComponent';
import MessagesFormComponent from '../messages/MessagesFormComponent';
import MessagesComponent from '../messages/MessagesComponent';
import ChannelInfoComponent from '../channels/ChannelInfoComponent';
import { subscribeToNewChannels, subscribeToNewMessages } from '../../services/socketService';
import ModalComponent from '../modal/ModalComponent';

const ChatPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authToken = localStorage.getItem('Authorization');

  useEffect(() => {
    if (!authToken) {
      navigate('/login');
    }
    if (authToken) {
      getData(authToken)
        .then((response) => response.data)
        .then((data) => {
          data.channels.forEach((channel) => {
            dispatch(addChannel(channel));
          });
          data.messages.forEach((message) => {
            dispatch(addMessage(message));
          });
        })
        .catch((error) => console.error('Error:', error));

      subscribeToNewChannels((payload) => {
        dispatch(addChannel(payload));
      });

      subscribeToNewMessages((payload) => {
        dispatch(addMessage(payload));
      });
    }
  }, [authToken, navigate, dispatch]);

  return (
    <>
      <div className="h-100" id="chat">
        <div className="d-flex flex-column h-100">
          <HeaderComponent />
          <div className="container h-100 my-4 overflow-hidden rounded shadow">
            <div className="row h-100 bg-white flex-md-row">
              <ChannelsComponent />
              <div className="col p-0 h-100">
                <div className="d-flex flex-column h-100">
                  <ChannelInfoComponent />
                  <MessagesComponent />
                  <div className="mt-auto px-5 py-3">
                    <MessagesFormComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalComponent />
    </>
  );
};

export default ChatPage;
