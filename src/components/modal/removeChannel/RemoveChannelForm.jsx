import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { changeModal } from '../../../slices/modalSlice';
import { emitRemoveChannel } from '../../../services/socketService';

const RemoveChannelForm = () => {
  const dispatch = useDispatch();
  const channelToRemove = useSelector((state) => state.modalInfo.channelToRemove);

  const handleClose = () => {
    dispatch(changeModal('hidden'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const channelToRemoveId = {
      id: channelToRemove,
    };
    emitRemoveChannel(channelToRemoveId, (confirmation) => {
      if (confirmation.status === 'ok') {
        handleClose();
      } else {
        console.error('Channel was not removed, try again later');
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-end mt-2">
        <Button variant="secondary" onClick={handleClose} className="me-2">
          Отменить
        </Button>
        <Button variant="primary" className="btn-danger" type="submit">
          Удалить
        </Button>
      </div>
    </Form>
  );
};

export default RemoveChannelForm;
