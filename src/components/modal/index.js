import * as Yup from 'yup';
import AddChannelForm from './addChannel/AddChannelForm';
import RemoveChannelForm from './removeChannel/RemoveChannelForm';
import RenameChannelForm from './renameChannel/RenameChannelForm';

const channelSchema = Yup.object().shape({
  channelName: Yup.string()
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов')
    .required('Обязательное поле'),
});

const forms = {
  addChannel: <AddChannelForm validation={channelSchema} />,
  removeChannel: <RemoveChannelForm />,
  renameChannel: <RenameChannelForm validation={channelSchema} />,
  hidden: null,
};

export default (formName) => forms[formName];
