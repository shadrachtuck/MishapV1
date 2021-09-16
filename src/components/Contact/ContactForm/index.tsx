import { PageProps } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { colors, pxToRem } from '../../../styled-components/mixins';

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  background: ${colors('black')};
  padding: ${pxToRem(74)};
`;

type ContactFormProps = PageProps & {
  className: string;
};

const ContactForm = ({ className }: ContactFormProps): JSX.Element => {
  return (
    <Form action="" className={className}>
      <h2>What's up?</h2>

      <div>
        <label htmlFor="full-name">Full Name</label>
        <input type="text" name="full-name" />
      </div>

      <div>
        <label htmlFor="email-address">Email Address</label>
        <input type="text" name="email-address" />
      </div>

      <div>
        <label htmlFor="phone-number">Phone No.</label>
        <input type="text" name="phone-number" />
      </div>

      <div>
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" />
      </div>

      <button>Send Message</button>
    </Form>
  );
};

export default styled(ContactForm)``;
