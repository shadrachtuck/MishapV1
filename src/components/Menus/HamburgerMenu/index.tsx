import React, { useState } from 'react';
import useIsAboveMobileWidth from '../../../utils/hooks/useIsAboveMobileWidth';
import Menu from '../MenuBar';
import { Icon, MenuLabel, PopupMenu, MobilePopupMenu } from './styles';

const HamburgerMenu = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);
  const isAboveMobile = useIsAboveMobileWidth();

  const handleOnClick = (): void => setIsClicked(!isClicked);

  const renderMenu = (): JSX.Element => (
    <>
      <MenuLabel onClick={handleOnClick}>
        <Icon isClicked={isClicked} />
      </MenuLabel>

      <Menu
        color="white"
        displayHorizontally={false}
        onMenuItemClick={handleOnClick}
      />
    </>
  );
  return (
    <>
      <MenuLabel onClick={handleOnClick}>
        <Icon isClicked={isClicked} />
      </MenuLabel>

      {isAboveMobile ? (
        <PopupMenu isClicked={isClicked}>{renderMenu()}</PopupMenu>
      ) : (
        <MobilePopupMenu isClicked={isClicked}>{renderMenu()}</MobilePopupMenu>
      )}
    </>
  );
};

export default HamburgerMenu;
