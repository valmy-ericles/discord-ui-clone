import React from 'react';

import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';

function ServerList() {
  return (
    <Container>
      <ServerButton isHome />

      <Separator/>

      <ServerButton/>
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton/>
      <ServerButton/>
      <ServerButton hasNotifications/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton mentions={1}/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton hasNotifications/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton mentions={1}/>
      <ServerButton/>
      <ServerButton/>
    </Container>
  )
}

export default ServerList;