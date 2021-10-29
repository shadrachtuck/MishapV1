import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import SocialMediaLinks, {
  SocialMediaLinksProps,
} from '../../../SocialMediaLinks';
import config from '../../../../../config';
// TODO: Import custom bandcamp logo

export const LeftSidebarElement = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  position: sticky;
  height: 100vh;
  top: 0;
  left: 0;
`;

const socialMediaLinks: SocialMediaLinksProps['links'] = [
  {
    name: 'facebook',
    href: config.socials.facebook,
  },
  {
    name: 'instagram',
    href: config.socials.instagram,
  },
  {
    name: 'bandcamp',
    href: config.socials.bandcamp,
  },
];

const LeftSidebar = (): JSX.Element => {
  const mishapLogo = '../../../../assets/svg/mishap-text-logo.svg';

  return (
    <LeftSidebarElement>
      <StaticImage src={mishapLogo} alt="mishap records" />

      <SocialMediaLinks links={socialMediaLinks} />
    </LeftSidebarElement>
  );
};

export default LeftSidebar;
