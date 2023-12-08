import i18n from 'i18next';

const titles = {
  addChannel: i18n.t('channel.add'),
  removeChannel: i18n.t('channel.remove'),
  renameChannel: i18n.t('channel.rename'),
  hidden: null,
};

export default (modalName) => titles[modalName];
