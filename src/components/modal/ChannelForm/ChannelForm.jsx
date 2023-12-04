import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { emitNewChannel, emitRenameChannel, emitRemoveChannel } from '../../../services/socketService';
import { changeModal } from '../../../slices/modalSlice';

const ChannelForm = ({ validation, type }) => {
  const dispatch = useDispatch();
  const existingChannels = useSelector((state) => state.channelsInfo.channels);
  const channelToRename = useSelector((state) => state.modalInfo.channelToRename);
  const channelToRemove = useSelector((state) => state.modalInfo.channelToRemove);
  const [error, setError] = useState(null);
  const handleClose = () => {
    dispatch(changeModal('hidden'));
  };

  const handleConfirmation = (confirmation) => {
    if (confirmation.status === 'ok') {
      handleClose();
    } else {
      console.error('Channel was not added, try again later');
    }
  };

  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    validationSchema: validation,
    onSubmit: (value) => {
      const existingName = existingChannels.find((channel) => channel.name === value.channelName);
      if (existingName) {
        console.error('Name already exists');
        setError('Канал с таким именем уже существует');
      }
      if (!existingName) {
        setError(null);
        if (type === 'addChannel') {
          const newChannelName = {
            name: value.channelName,
          };
          emitNewChannel(newChannelName, handleConfirmation);
        }
        if (type === 'renameChannel') {
          const renamedChannel = {
            id: channelToRename,
            name: value.channelName,
          };
          emitRenameChannel(renamedChannel, handleConfirmation);
        }
        if (type === 'removeChannel') {
          const channelToRemoveId = {
            id: channelToRemove,
          };
          emitRemoveChannel(channelToRemoveId, handleConfirmation);
        }
      }
    },
  });

  const { handleChange, handleSubmit, errors } = formik;
  const { channelName } = formik.values;

  return (
    <Form onSubmit={handleSubmit}>
      {type !== 'removeChannel' && (
        <Form.Group controlId="name">
          <Form.Control
            name="channelName"
            type="text"
            placeholder=""
            value={channelName}
            onChange={(e) => {
              handleChange(e);
              setError(null);
            }}
            className={formik.touched.channelName && (formik.errors.channelName || error) ? 'is-invalid' : ''}
          />
          {formik.touched.channelName
            && (errors.channelName || error)
            && <div className="invalid-feedback">{(formik.errors.channelName || error)}</div>}
        </Form.Group>
      )}
      <div className="d-flex justify-content-end mt-2">
        <Button variant="secondary" onClick={handleClose} className="me-2">
          Отменить
        </Button>
        <Button variant={type === 'removeChannel' ? 'danger' : 'primary'} type="submit">
          {type === 'removeChannel' ? 'Удалить' : 'Отправить'}
        </Button>
      </div>
    </Form>
  );
};

export default ChannelForm;
