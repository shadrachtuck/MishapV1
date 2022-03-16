import React from 'react';
import { SocialMediaIcons } from '../../../SocialMediaLinks';
import config from '../../../../../config';
import { LeftSidebarWrapper, LinkToHome } from './styles';
import MishapLogo from '../../../../assets/svg/mishap-text-clear-bg.svg';

const LeftSidebar = (): JSX.Element => {
  return (
    <LeftSidebarWrapper>
      <LinkToHome href={config.routes.home}>
        <MishapLogo title="Mishap Records" />
      </LinkToHome>

      <SocialMediaIcons
        iconSize={25}
        links={config.socials}
        addVerticalSpacing={false}
        displayHorizontally={false}
      />
    </LeftSidebarWrapper>
  );
};

export default LeftSidebar;
