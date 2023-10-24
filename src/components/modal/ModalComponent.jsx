import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import { changeModal } from '../../slices/modalSlice';

import getForm from './index';
import getTitle from './getTitle';

const ModalComponent = () => {
  const dispatch = useDispatch();
  const currentModal = useSelector((state) => state.modalInfo.modal);

  if (currentModal === 'hidden') {
    return null;
  }

  const handleClose = () => {
    dispatch(changeModal('hidden'));
  };

  const title = getTitle(currentModal);

  return (
    <Modal show centered>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <Button variant="secondary" className="btn-close" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>
        {getForm(currentModal)}
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
