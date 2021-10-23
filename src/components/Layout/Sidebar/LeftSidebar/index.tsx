import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import SocialMediaLinks from '../../../SocialMediaLinks';

export const LeftSidebarElement = styled.aside`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  height: 100vh;
  top: 0;
  left: 0;
`;

const LeftSidebar = (): JSX.Element => {
  const mishapLogo = '../../../../assets/svg/mishap-text-logo.svg';

  return (
    <LeftSidebarElement>
      <StaticImage src={mishapLogo} alt="mishap records" />

      <SocialMediaLinks />
    </LeftSidebarElement>
  );
};

export default LeftSidebar;
