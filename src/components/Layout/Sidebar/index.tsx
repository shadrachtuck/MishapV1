import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import SocialMediaLinks from '../../SocialMediaLinks';

export const SidebarElement = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
`;

const LeftSidebar = (): JSX.Element => {
  const mishapLogo =
    '../../src/assets/mishap-designs/mishap-logo-design-4-jetblack.png';

  return (
    <SidebarElement>
      <StaticImage src={mishapLogo} alt="mishap records" />

      <SocialMediaLinks />
    </SidebarElement>
  );
};

export default LeftSidebar;
