import React from 'react';

import { Container, Avatar, Message, Header, Content } from './styles';

export { Mention } from './styles';

function ChannelMessage({ author, image, date, content, hasMention, isBot }) {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      
      <Avatar className={isBot ? 'bot' : ''} image={image} />

      <Message>
        <Header>
          <strong>{author}</strong>

          <time>{date}</time>

          {isBot && <span>Bot</span> }
        </Header>

        <Content>
          {content}
        </Content>
      </Message>
    </Container>
  )
}

export default ChannelMessage;