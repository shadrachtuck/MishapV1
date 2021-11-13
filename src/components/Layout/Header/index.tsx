import React from 'react';
import useIsAboveMobileWidth from '../../../utils/hooks/useIsAboveMobileWidth';
import HamburgerMenu from '../../Menus/HamburgerMenu';
import Menu from '../../Menus/MenuBar';
import { HeaderElement } from './styles';

const Header = (): JSX.Element => {
  const isAboveMobile = useIsAboveMobileWidth();

  return (
    <HeaderElement>
      {isAboveMobile ? (
        <Menu color="black" displayHorizontally />
      ) : (
        <HamburgerMenu />
      )}
    </HeaderElement>
  );
};

export default Header;
