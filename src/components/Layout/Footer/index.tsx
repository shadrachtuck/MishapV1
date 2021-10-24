import React from 'react';
import ContactInformation from '../../../components/Contact/ContactInformation';
import styled from 'styled-components';
import Contact from '../../../components/Contact';
import ContactForm from '../../../components/Contact/ContactForm';
import { color, pxToRem } from '../../../styled-components/mixins';

type FooterProps = {
  className?: string;
};

export const FooterElement = styled.footer`
  display: grid;
  grid-template-columns: [left] 1fr [right] 1fr;
  justify-content: center;

  ${ContactInformation} {
    grid-column: left;

    padding: ${pxToRem(48)};
  }

  ${ContactForm} {
    padding: ${pxToRem(48)};
    background: ${color('black')};
    color: ${color('white')};
    grid-column: right;
  }
`;

const Footer = ({ className }: FooterProps): JSX.Element => {
  return (
    <FooterElement id="contact" className={className}>
      <Contact />
    </FooterElement>
  );
};

export default styled(Footer)``;
