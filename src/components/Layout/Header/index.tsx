import React from 'react';
import styled from 'styled-components';
import Menu from '../../Menu';

export const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Header = (): JSX.Element => {
  return (
    <HeaderElement>
      <Menu />
    </HeaderElement>
  );
};

export default Header;
