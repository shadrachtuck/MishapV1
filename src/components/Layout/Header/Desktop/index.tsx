import React from 'react';
import Menu from '../../../Menus/MenuBar';
import { HeaderElement } from '../styles';

const DesktopHeader = (): JSX.Element => {
  return (
    <HeaderElement>
      <Menu color="black" displayHorizontally />
    </HeaderElement>
  );
};

export default DesktopHeader;
