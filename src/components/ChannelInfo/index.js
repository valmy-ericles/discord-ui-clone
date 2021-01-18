import React from 'react';

import {
  Container,
  HastagIcon,
  Title,
  Separator,
  Description 
} from './styles';

function ChannelInfo() {
  return (
    <Container>
      <HastagIcon/>

      <Title>Chat Livre</Title>

      <Separator/>

      <Description>Canal aberto para conversas</Description>
    </Container>
  )
}

export default ChannelInfo;