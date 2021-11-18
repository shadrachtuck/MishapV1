import React from 'react';
import HamburgerMenu from '../../../Menus/HamburgerMenu';
import { ButtonWrapper, MobileHeaderElement } from '../styles';
import Bunny from '../../../../assets/svg/mishap-rabbit.svg';
import config from '../../../../../config';
import MishapLogo from '../../../../assets/svg/mishap-text-clear-bg.svg';
import { LinkToHome } from '../../Sidebar/LeftSidebar/styles';
import { DefaultLayoutProps } from '../../types';
import styled from 'styled-components';

const MobileHeader = ({ className }: DefaultLayoutProps): JSX.Element => {
  return (
    <MobileHeaderElement className={className}>
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

export default styled(MobileHeader)``;
