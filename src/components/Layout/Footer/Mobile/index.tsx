import React from 'react';
import styled from 'styled-components';
import config from '../../../../../config';
import Contact from '../../../../components/Contact';
import SocialMediaLinks from '../../../SocialMediaLinks';
import { FooterWrapper } from '../styles';

type FooterProps = {
  className?: string;
};

const MobileFooter = ({ className }: FooterProps): JSX.Element => {
  return (
    <FooterWrapper id="contact" className={className}>
      <Contact />

      <SocialMediaLinks
        links={config.socials}
        iconSize={40}
        addVerticalSpacing
        displayHorizontally
      />
    </FooterWrapper>
  );
};

export default styled(MobileFooter)``;
