import * as Yup from 'yup';
import i18n from 'i18next';

import ChannelForm from './ChannelForm/ChannelForm';

const { t } = i18n;

const channelSchema = Yup.object().shape({
  channelName: Yup.string()
    .min(3, t('errors.charLength'))
    .max(20, t('errors.charLength'))
    .required(t('errors.required')),
});

const forms = {
  addChannel: <ChannelForm validation={channelSchema} type="addChannel" />,
  removeChannel: <ChannelForm type="removeChannel" />,
  renameChannel: <ChannelForm validation={channelSchema} type="renameChannel" />,
  hidden: null,
};

export default (formName) => forms[formName];
