import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { emitNewChannel } from '../../../services/socketService';
import { changeModal } from '../../../slices/modalSlice';

const AddChannelForm = () => {
  const dispatch = useDispatch();
  const [channelName, setChannelName] = useState('');
  const [submitBtn, setSubmitBtn] = useState('disabled');

  const handleClose = () => {
    dispatch(changeModal('hidden'));
    setChannelName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChannelName = {
      name: channelName,
    };
    emitNewChannel(newChannelName, (confirmation) => {
      if (confirmation.status === 'ok') {
        handleClose();
      } else {
        console.error('Channel was not added, try again later');
        setSubmitBtn('disabled');
      }
    });
  };

  const handleChange = (e) => {
    setChannelName(e.target.value);
    if (e.target.value === '') {
      setSubmitBtn('disabled');
    } else {
      setSubmitBtn('enabled');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Control
          type="text"
          placeholder=""
          value={channelName}
          onChange={handleChange}
        />
      </Form.Group>
      <div className="d-flex justify-content-end mt-2">
        <Button variant="secondary" onClick={handleClose} className="me-2">
          Отменить
        </Button>
        <Button variant="primary" type="submit" disabled={submitBtn === 'disabled'}>
          Отправить
        </Button>
      </div>
    </Form>
  );
};

export default AddChannelForm;
