import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { changeCurrChannel } from '../../slices/channelsSlice';

const ChannelsComponent = () => {
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.channelsInfo.channels);
  const currChannel = useSelector((state) => state.channelsInfo.currChannel);
  const currChannelId = currChannel.id;

  const processedChannels = channels.map((channel) => {
    const { id, name } = channel;
    const itemClassNames = classNames(
      'w-100',
      'rounded-0',
      'text-start',
      'btn',
      id === currChannelId ? 'btn-secondary' : '',
    );
    return (
      <li className="nav-item w-100" key={id}>
        <button type="button" className={itemClassNames} onClick={() => dispatch(changeCurrChannel(channel))}>
          <span className="me-1">#</span>
          {name}
        </button>
      </li>
    );
  });
  return (
    <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
      {processedChannels}
    </ul>
  );
};

export default ChannelsComponent;
