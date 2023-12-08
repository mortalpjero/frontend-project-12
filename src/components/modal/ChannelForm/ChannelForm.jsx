import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { emitNewChannel, emitRenameChannel, emitRemoveChannel } from '../../../services/socketService';
import { changeCurrChannel } from '../../../slices/channelsSlice';
import { changeModal } from '../../../slices/modalSlice';

const ChannelForm = ({ validation, type }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const existingChannels = useSelector((state) => state.channelsInfo.channels);
  const channelToRename = useSelector((state) => state.modalInfo.channelToRename);
  const channelToRemove = useSelector((state) => state.modalInfo.channelToRemove);
  const currChannel = useSelector((state) => state.channelsInfo.currChannel);
  const [error, setError] = useState(null);
  const handleClose = () => {
    dispatch(changeModal('hidden'));
  };

  const handleConfirmation = (confirmation) => {
    if (confirmation.status === 'ok') {
      handleClose();
    } else {
      console.error(t('errors.channelNotAdded'));
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
        setError(t('errors.existingChannel'));
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
          if (currChannel.id === channelToRemove) {
            dispatch(changeCurrChannel({
              id: 1,
              name: 'general',
            }));
          }
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
          {t('buttons.cancel')}
        </Button>
        <Button variant={type === 'removeChannel' ? 'danger' : 'primary'} type="submit">
          {type === 'removeChannel' ? t('buttons.remove') : t('buttons.send')}
        </Button>
      </div>
    </Form>
  );
};

export default ChannelForm;
