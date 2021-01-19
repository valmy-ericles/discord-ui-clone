import React from 'react';

import faker from 'faker';
import { Container, Role, User, Avatar } from './styles';

const UserRow = ({ nickname, isBot, imgUrl }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} src={imgUrl} />

      <strong>{nickname}</strong>

      { isBot && <span>Bot</span> }
    </User>
  )
}

function UserList() {
  var loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Valmy Ericles Nunes Machado" imgUrl={faker.random.image()}/>

      <Role>Offline - 18</Role>

      <UserRow nickname={faker.name.findName()} isBot />
      
      {loop.map(() => {
        var randomName = faker.name.findName()
        var img = faker.random.image()

        return (
          <UserRow nickname={randomName} imgUrl={img} />
        )
      })}

    </Container>
  )
}

export default UserList;