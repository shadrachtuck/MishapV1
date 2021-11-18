import React from 'react';
import HamburgerMenu from '../../../Menus/HamburgerMenu';
import { ButtonWrapper, MobileHeaderElement } from '../styles';
import Bunny from '../../../../assets/svg/mishap-rabbit.svg';
import config from '../../../../../config';
import MishapLogo from '../../../../assets/svg/mishap-text-clear-bg.svg';
import { LinkToHome } from '../../Sidebar/LeftSidebar/styles';

const MobileHeader = (): JSX.Element => {
  return (
    <MobileHeaderElement>
      <Bunny width={100} height={100} />

      <LinkToHome href={config.routes.home}>
        <MishapLogo title="Mishap Records" width={100} height={100} />
      </LinkToHome>

      <ButtonWrapper>
        <HamburgerMenu />
      </ButtonWrapper>
    </MobileHeaderElement>
  );
};

export default MobileHeader;
