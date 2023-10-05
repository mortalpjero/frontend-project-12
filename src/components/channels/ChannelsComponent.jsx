import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

const ChannelsComponent = () => {
  const channels = useSelector((state) => state.channelsInfo.channels);
  const [pressedBtn, setPressedBtn] = useState(1);

  const processedChannels = channels.map((channel) => {
    const { id, name } = channel;
    const itemClassNames = classNames(
      'w-100',
      'rounded-0',
      'text-start',
      'btn',
      id === pressedBtn ? 'btn-secondary' : '',
    );
    return (
      <li className="nav-item w-100" key={id}>
        <button type="button" className={itemClassNames} onClick={() => setPressedBtn(id)}>
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
