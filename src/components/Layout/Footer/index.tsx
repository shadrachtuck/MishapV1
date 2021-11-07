import React from 'react';
import styled from 'styled-components';
import config from '../../../../config';
import Contact from '../../../components/Contact';
import useIsAboveMobileWidth from '../../../utils/hooks/useIsAboveMobileWidth';
import SocialMediaLinks from '../../SocialMediaLinks';
import { FooterWrapper } from './styles';

type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps): JSX.Element => {
  const isAboveMobile = useIsAboveMobileWidth();

  return (
    <FooterWrapper id="contact" className={className}>
      <Contact />

      {!isAboveMobile && (
        <SocialMediaLinks
          links={config.socials}
          iconSize={40}
          addVerticalSpacing
          displayHorizontally
        />
      )}
    </FooterWrapper>
  );
};

export default styled(Footer)``;
