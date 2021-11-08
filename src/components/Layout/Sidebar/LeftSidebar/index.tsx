import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SocialMediaLinks from '../../../SocialMediaLinks';
import config from '../../../../../config';
import { LeftSidebarWrapper } from './styles';
import useIsAboveMobileWidth from '../../../../utils/hooks/useIsAboveMobileWidth';

const LeftSidebar = (): JSX.Element => {
  const mishapLogo = '../../../../assets/svg/mishap-text-logo.svg';

  const isAboveMobile = useIsAboveMobileWidth();

  return (
    <LeftSidebarWrapper>
      <a href={config.routes.home}>
        <StaticImage src={mishapLogo} alt="mishap records" />
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
