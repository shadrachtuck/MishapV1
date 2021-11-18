import React from 'react';
import styled from 'styled-components';
import Contact from '../../../../components/Contact';
import { FooterWrapper } from '../styles';

type FooterProps = {
  className?: string;
};

const DesktopFooter = ({ className }: FooterProps): JSX.Element => {
  return (
    <FooterWrapper id="contact" className={className}>
      <Contact />
    </FooterWrapper>
  );
};

export default styled(DesktopFooter)``;
