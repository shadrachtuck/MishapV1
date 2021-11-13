import React, { useState } from 'react';
import Menu from '../MenuBar';
import { Icon, MenuLabel, MobileMenu } from './styles';

const HamburgerMenu = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = (): void => setIsClicked(!isClicked);

  return (
    <>
      <MenuLabel onClick={handleOnClick}>
        <Icon isClicked={isClicked} />
      </MenuLabel>

      <MobileMenu isClicked={isClicked}>
        <MenuLabel onClick={handleOnClick}>
          <Icon isClicked={isClicked} />
        </MenuLabel>

        <Menu
          color="white"
          displayHorizontally={false}
          onMenuItemClick={handleOnClick}
        />
      </MobileMenu>
    </>
  );
};

export default HamburgerMenu;
