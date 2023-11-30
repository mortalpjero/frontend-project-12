import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { changeCurrChannel } from '../../slices/channelsSlice';
import { changeModal, setChannelToRemove, setChannelToRename } from '../../slices/modalSlice';

const RenderedChannels = () => {
  const dispatch = useDispatch();
  const currChannel = useSelector((state) => state.channelsInfo.currChannel);
  const channels = useSelector((state) => state.channelsInfo.channels);
  const currChannelId = currChannel.id;

  const renderChannelContent = (channel, itemClassNames, toggleClassNames) => {
    const { name, removable } = channel;
    if (removable) {
      return (
        <Dropdown role="group" className="d-flex show dropdown btn-group">
          <Button className={itemClassNames} onClick={() => dispatch(changeCurrChannel(channel))}>
            <span className="me-1">#</span>
            {name}
          </Button>
          <Dropdown.Toggle className={toggleClassNames} id="dropdown-basic" />
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => {
              dispatch(changeModal('removeChannel'));
              dispatch(setChannelToRemove(channel.id));
            }}
            >
              Удалить
            </Dropdown.Item>
            <Dropdown.Item onClick={() => {
              dispatch(changeModal('renameChannel'));
              dispatch(setChannelToRename(channel.id));
            }}
            >
              Переименовать
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }

    return (
      <Button className={itemClassNames} onClick={() => dispatch(changeCurrChannel(channel))}>
        <span className="me-1">#</span>
        {name}
      </Button>
    );
  };

  return channels.map((channel) => {
    const { removable, id } = channel;
    console.log(removable);
    const itemClassNames = classNames(
      'w-100',
      'rounded-0',
      'text-start',
      removable ? 'text-start text-truncate' : '',
      id === currChannelId ? 'btn-secondary' : 'btn-light',
    );

    const toggleClassNames = classNames(
      'flex-grow-0',
      'dropdown-toggle',
      'dropdown-toggle-split',
      id === currChannelId ? 'btn-secondary' : 'btn-light',
    );

    return (
      <li className="nav-item w-100" key={id}>
        {renderChannelContent(channel, itemClassNames, toggleClassNames)}
      </li>
    );
  });
};

export default RenderedChannels;
