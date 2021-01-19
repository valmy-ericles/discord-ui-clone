import React, { useEffect, useRef } from 'react';

import faker from 'faker';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

function ChannelData() {
  const messagesRef = useRef();

  useEffect(() => {
    const div = messagesRef.current

    if(div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(20).keys()).map((n) => {
          var randomName = faker.name.findName()
          var content = faker.lorem.sentence()
          var img = faker.random.image()

          return (
            <ChannelMessage
              key={n}
              author={randomName}
              image={img}
              date="16/09/1996"
              content={
                <>
                  { n === 10 && <Mention>@valmy_ericles</Mention> }
                  { content }
                </>
              }
              hasMention={n === 10}
              isBot={n === 4}
            />
          )
        })}
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon/>
      </InputWrapper>

    </Container>
  )
}

export default ChannelData;