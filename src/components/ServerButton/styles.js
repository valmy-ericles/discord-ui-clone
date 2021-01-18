import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;

  width: 48px;
  height: 48px;

  margin-bottom: 8px;
  background-color: ${({ isHome }) => isHome ? 'var(--rocketseat)' : 'var(--primary)'};

  cursor: pointer;
  position: relative;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    width: 9px;
    height: 9px;

    position: absolute;
    left: -17px;
    top: calc(50%, -4.5px);

    background-color: var(--white);
    border-radius: 50%;

    content: '';
    display: ${({ hasNotifications }) => hasNotifications ? 'inline' : 'none'}
  }

  &::after {
    height: 16px;
    width: auto;

    position: absolute;
    right: -4px;
    bottom: -4px;

    background-color: var(--notification);
    border-radius: 50%;
    border: 4px solid var(--tertiary);
    border-radius: 12px;
  
    padding: 0 4px;

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
  
    content: '${({ mentions }) => (mentions > 100) ? '100+' : (mentions > 0 ? mentions : '')}';

    display: ${({ mentions }) => mentions > 0 ? 'inline' : 'none'}
  }

  transition: border-radius 0.2s, background-color 0.2s;
  
  &:hover {
    border-radius: 16px;
    background-color: ${({ isHome }) => isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  }
`;
