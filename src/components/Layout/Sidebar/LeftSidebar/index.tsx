import React from 'react';
import SocialMediaLinks from '../../../SocialMediaLinks';
import config from '../../../../../config';
import { LeftSidebarWrapper, LinkToHome } from './styles';
import MishapLogo from '../../../../assets/svg/mishap-text-clear-bg.svg';

const LeftSidebar = (): JSX.Element => {
  return (
    <LeftSidebarWrapper>
      <LinkToHome href={config.routes.home}>
        <MishapLogo title="Mishap Records" />
      </LinkToHome>

      <SocialMediaLinks
        iconSize={25}
        links={config.socials}
        addVerticalSpacing={false}
        displayHorizontally={false}
      />
    </LeftSidebarWrapper>
  );
};

export default LeftSidebar;
