import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

export const FooterElement = styled.footer`
  display: grid;
  grid-template-columns: [left] 1fr [right] 1fr;
  align-items: center;
  justify-content: center;

  ${ContactInformation} {
    grid-column: left;
  }

  ${ContactForm} {
    grid-column: right;
  }
`;

const Contact = (): JSX.Element => {
  return (
    <FooterElement>
      <ContactInformation />

      <ContactForm />
    </FooterElement>
  );
};

export default Contact;
