import React from 'react';
import { useSelector } from 'react-redux';

const MessagesComponent = () => {
  const messages = useSelector((state) => state.messagesInfo.messages);
  const currChannel = useSelector((state) => state.channelsInfo.currChannel);

  const renderMessages = (allMessages) => {
    const currentMessages = allMessages.filter((message) => message.channelId === currChannel.id);
    return currentMessages.map((message) => {
      const { username, body, id } = message;
      const text = `: ${body}`;
      return (
        <div className="text-break mb-2" key={id}>
          <b>{username}</b>
          {text}
        </div>
      );
    });
  };

  return (
    <div id="messages-box" className="chat-messages overflow-auto px-5 ">
      {renderMessages(messages)}
    </div>
  );
};

export default MessagesComponent;
