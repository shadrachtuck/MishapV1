import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SocialMediaLinks from '../../../SocialMediaLinks';
import config from '../../../../../config';
import { LeftSidebarWrapper } from './styles';
import useIsAboveMobileWidth from '../../../../utils/hooks/useIsAboveMobileWidth';
// TODO: Import custom bandcamp logo

const LeftSidebar = (): JSX.Element => {
  const mishapLogo = '../../../../assets/svg/mishap-text-logo.svg';

  const isAboveMobile = useIsAboveMobileWidth();

  return (
    <LeftSidebarWrapper>
      <StaticImage src={mishapLogo} alt="mishap records" />

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
