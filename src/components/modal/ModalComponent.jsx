import { useSelector } from 'react-redux';
import getModal from './index';

const ModalComponent = () => {
  const currentModal = useSelector((state) => state.modalInfo.modal);

  if (currentModal === 'hidden') {
    return null;
  }

  return getModal(currentModal);
};

export default ModalComponent;
