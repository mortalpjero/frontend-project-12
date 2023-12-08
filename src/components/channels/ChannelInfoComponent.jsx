import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const ChannelInfoComponent = () => {
  const { t } = useTranslation();
  const currChannel = useSelector((state) => state.channelsInfo.currChannel);
  const messages = useSelector((state) => state.messagesInfo.messages);

  const { name, id } = currChannel;
  const channelTitle = `# ${name}`;

  const calculateMessages = (allMessages, currId) => {
    const currentMessages = allMessages.filter((message) => message.channelId === currId);
    return currentMessages.length;
  };

  const messagesCounter = `${calculateMessages(messages, id)} ${t('messages')}`;

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0">
        <b>{channelTitle}</b>
      </p>
      <span className="text-muted">{messagesCounter}</span>
    </div>
  );
};

export default ChannelInfoComponent;
