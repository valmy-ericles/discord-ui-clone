import React, { useState } from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const buttons = [
  { name: 'chat-livre' },
  { name: 'trabalho' },
  { name: 'full-stack' },
  { name: 'valorant' },
]

function ChannelList() {
  const [selected, setSelected] = useState()

  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon/>
      </Category>
      
      {buttons.map((item, index) => {
        return (
          <ChannelButton
            key={index}
            channelName={item.name}
            selected={selected === item.name} 
            select={(name) => setSelected(name)} 
          />
        )
      })}
    </Container>
  )
}

export default ChannelList;