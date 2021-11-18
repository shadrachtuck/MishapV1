import React from 'react';
import styled from 'styled-components';
import Contact from '../../../../components/Contact';
import { DefaultLayoutProps } from '../../types';
import { FooterWrapper } from '../styles';

const DesktopFooter = ({ className }: DefaultLayoutProps): JSX.Element => {
  return (
    <FooterWrapper id="contact" className={className}>
      <Contact />
    </FooterWrapper>
  );
};

export default styled(DesktopFooter)``;
