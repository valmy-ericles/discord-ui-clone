import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon
} from './styles';

function UserInfo() {
  return (
    <Container>

      <Profile>
        <Avatar/>
        <UserData>
          <strong>Valmy Ericles </strong>
          <span>#3245</span>
        </UserData>
      </Profile>
      
      <Icons>
        <MicIcon/>
        <HeadphoneIcon/>
        <SettingsIcon/>
      </Icons>

    </Container>
  )
}

export default UserInfo;