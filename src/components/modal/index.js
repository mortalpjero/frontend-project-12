import AddChannelModalComponent from './addChannel/AddChannelModalComponent';

const modals = {
  addChannel: <AddChannelModalComponent />,
  hidden: null,
};

export default (modalName) => modals[modalName];
