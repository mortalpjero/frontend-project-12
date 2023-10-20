import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeModal } from '../../../slices/modalSlice';

const AddChannelModalComponent = () => {
  const dispatch = useDispatch();
  const [channelName, setChannelName] = useState('');

  const handleClose = () => {
    dispatch(changeModal('hidden'));
    setChannelName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeModal('hidden'));
    console.log(channelName);
    setChannelName('');
  };

  return (
    <Modal show centered>
      <Modal.Header closeButton>
        <Modal.Title>Добавить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="name">
            <Form.Control
              type="text"
              placeholder=""
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
            />
          </Form.Group>
          <div className="d-flex justify-content-end mt-2">
            <Button variant="secondary" onClick={handleClose} className="me-2">
              Отменить
            </Button>
            <Button variant="primary" type="submit">
              Отправить
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddChannelModalComponent;
