import React from 'react';

import { Container, Role, User, Avatar } from './styles';

const UserRow = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar/>

      <strong>{nickname}</strong>

      { isBot && <span>Bot</span> }
    </User>
  )
}

function UserList() {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Valmy Ericles"/>

      <Role>Offline - 18</Role>
      <UserRow nickname="Alex_Machado" isBot/>
    </Container>
  )
}

export default UserList;