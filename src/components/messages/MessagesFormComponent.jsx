import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { emitNewMessage } from '../../services/socketService';

const MessagesFormComponent = () => {
  const [message, setMessage] = useState('');
  const [inputStatus, setInputStatus] = useState('invalid');
  const currChannel = useSelector((state) => state.channelsInfo.currChannel);

  const handleSendMessage = async (targetSubmit) => {
    targetSubmit.preventDefault();
    const username = localStorage.getItem('username');
    const newMessage = {
      body: message,
      channelId: currChannel.id,
      username,
    };
    try {
      await emitNewMessage(newMessage);
      setMessage('');
      setInputStatus('invalid');
    } catch (e) {
      console.error(`Could not send a message: ${e}`);
      setInputStatus('invalid');
    }
  };

  const onTyping = (value) => {
    if (value !== '' && navigator.onLine) {
      setInputStatus('valid');
    }
    if (value === '' || !navigator.onLine) {
      setInputStatus('invalid');
    }
    setMessage(value);
  };

  return (
    <Form novalidate="" className="py-1 border rounded-2" onSubmit={(e) => handleSendMessage(e)}>
      <Form.Group className="input-group has-validation">
        <Form.Control name="body" aria-label="Новое сообщение" placeholder="Введите сообщение..." className="border-0 p-0 ps-2 form-control" value={message} onChange={(e) => onTyping(e.target.value)} />
        <Button variant="outline-secondary" type="submit" disabled={inputStatus === 'invalid' || !navigator.onLine} className="btn btn-group-vertical border-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg>
          <span className="visually-hidden">Отправить</span>
        </Button>
      </Form.Group>
    </Form>
  );
};

export default MessagesFormComponent;
