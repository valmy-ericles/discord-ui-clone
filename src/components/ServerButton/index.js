import React from 'react';

import Logo from '../../assets/logo.svg';
import { Button } from './styles';

function ServerButton({ selected, isHome, hasNotifications, mentions}) {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={Logo} alt="Rocketseat" />}
    </Button>
  )
}

export default ServerButton;