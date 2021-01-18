import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

function ChannelButton({ channelName, select, selected }) {
  return (
    <Container className={selected ? 'active' : ''} onClick={() => select(channelName)}>
      <div>
        <HashtagIcon/>
        <span>{channelName}</span>
      </div>
      
      <div className="actions">
        <InviteIcon/>
        <SettingsIcon/>
      </div>
    </Container>
  )
}

export default ChannelButton;