import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

export const FooterElement = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  ${ContactForm}, ${ContactInformation} {
    flex: 1 0 50%;
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
