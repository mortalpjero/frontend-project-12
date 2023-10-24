import AddChannelForm from './addChannel/AddChannelForm';

const forms = {
  addChannel: <AddChannelForm />,
  hidden: null,
};

export default (formName) => forms[formName];
