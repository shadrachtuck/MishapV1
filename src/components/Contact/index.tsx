import React from 'react';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = (): JSX.Element => {
  return (
    <>
      <ContactInformation />

      <ContactForm />
    </>
  );
};

export default Contact;
