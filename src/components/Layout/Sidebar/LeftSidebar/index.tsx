import React from 'react';
import SocialMediaLinks from '../../../SocialMediaLinks';
import config from '../../../../../config';
import { LeftSidebarWrapper, LinkToHome } from './styles';
import useIsAboveMobileWidth from '../../../../utils/hooks/useIsAboveMobileWidth';
import MishapLogo from '../../../../assets/svg/mishap-text-clear-bg.svg';

const LeftSidebar = (): JSX.Element => {
  const isAboveMobile = useIsAboveMobileWidth();

  return (
    <LeftSidebarWrapper>
      <LinkToHome href={config.routes.home}>
        <MishapLogo title="Mishap Records" />
      </LinkToHome>

      {isAboveMobile && (
        <SocialMediaLinks
          iconSize={25}
          links={config.socials}
          addVerticalSpacing={false}
          displayHorizontally={false}
        />
      )}
    </LeftSidebarWrapper>
  );
};

export default LeftSidebar;
