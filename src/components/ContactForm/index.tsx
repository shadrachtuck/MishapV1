import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styled-components/mixins';

const Form = styled.form`
  display: flex;
  background: ${colors('black')};
`;

const ContactForm = (): JSX.Element => {
  return (
    <Form action="">
      <label htmlFor="full-name">Full Name</label>
      <input type="text" name="full-name" />

      <label htmlFor="email-address">Email Address</label>
      <input type="text" name="email-address" />

      <label htmlFor="phone-number">Phone No.</label>
      <input type="text" name="phone-number" />

      <label htmlFor="subject">Subject</label>
      <input type="text" name="subject" />

      <button>Send Message</button>
    </Form>
  );
};

export default ContactForm;
