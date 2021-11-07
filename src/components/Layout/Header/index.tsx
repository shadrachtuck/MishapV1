import React, { useState } from 'react';
import useIsAboveMobileWidth from '../../../utils/hooks/useIsAboveMobileWidth';
import Menu from '../../Menu';
import { HeaderElement, MenuLabel, Icon, MobileMenu } from './styles';

const Header = (): JSX.Element => {
  const isAboveMobile = useIsAboveMobileWidth();

  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = (): void => setIsClicked(!isClicked);

  return (
    <HeaderElement>
      {isAboveMobile ? (
        <Menu color="black" displayHorizontally />
      ) : (
        <>
          <MenuLabel onClick={handleOnClick}>
            <Icon isClicked={isClicked} />
          </MenuLabel>

          <MobileMenu isClicked={isClicked}>
            <MenuLabel onClick={handleOnClick}>
              <Icon isClicked={isClicked} />
            </MenuLabel>

            <Menu color="white" displayHorizontally={false} />
          </MobileMenu>
        </>
      )}
    </HeaderElement>
  );
};

export default Header;
