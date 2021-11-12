import React from 'react';
import SocialMediaLinks from '../../../SocialMediaLinks';
import config from '../../../../../config';
import { LeftSidebarWrapper } from './styles';
import useIsAboveMobileWidth from '../../../../utils/hooks/useIsAboveMobileWidth';
import MishapLogo from '../../../../assets/svg/mishap-text-logo.svg';

const LeftSidebar = (): JSX.Element => {
  const isAboveMobile = useIsAboveMobileWidth();

  return (
    <LeftSidebarWrapper>
      <a href={config.routes.home}>
        <MishapLogo title="Mishap Records" />
      </a>

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
