import * as Yup from 'yup';
import ChannelForm from './ChannelForm/ChannelForm';

const channelSchema = Yup.object().shape({
  channelName: Yup.string()
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов')
    .required('Обязательное поле'),
});

const forms = {
  addChannel: <ChannelForm validation={channelSchema} type="addChannel" />,
  removeChannel: <ChannelForm type="removeChannel" />,
  renameChannel: <ChannelForm validation={channelSchema} type="renameChannel" />,
  hidden: null,
};

export default (formName) => forms[formName];
