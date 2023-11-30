import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';

import { emitRenameChannel } from '../../../services/socketService';
import { changeModal } from '../../../slices/modalSlice';

const RenameChannelForm = ({ validation }) => {
  const dispatch = useDispatch();
  const channelToRename = useSelector((state) => state.modalInfo.channelToRename);

  const handleClose = () => {
    dispatch(changeModal('hidden'));
  };

  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    validationSchema: validation,
    onSubmit: (value) => {
      const renamedChannel = {
        id: channelToRename,
        name: value.channelName,
      };
      emitRenameChannel(renamedChannel, (confirmation) => {
        if (confirmation.status === 'ok') {
          handleClose();
        } else {
          console.error('Channel was not added, try again later');
        }
      });
    },
  });

  const { handleChange, handleSubmit, errors } = formik;
  const { channelName } = formik.values;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Control
          name="channelName"
          type="text"
          placeholder=""
          value={channelName}
          onChange={handleChange}
          className={formik.touched.channelName && formik.errors.channelName ? 'is-invalid' : ''}
        />
        {formik.touched.channelName
          && errors.channelName
          && <div className="invalid-feedback">{formik.errors.channelName}</div>}
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
  );
};

export default RenameChannelForm;
