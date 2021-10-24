import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { color } from '../../../styled-components/mixins';

type InputProps = {
  backgroundTheme?: keyof DefaultTheme['colors'];
};

const Input = styled.input<InputProps>`
  background: ${({ backgroundTheme = 'black' }) => color(backgroundTheme)};
  color: ${({ backgroundTheme = 'black' }) =>
    color(backgroundTheme === 'black' ? 'white' : 'black')};
  border-bottom: 1px solid
    ${({ backgroundTheme = 'black' }) =>
      color(backgroundTheme === 'black' ? 'white' : 'black')};
  width: 100%;
`;

const InputSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  h2 {
    align-self: center;
  }
`;

type ContactFormProps = {
  className?: string;
};

const ContactForm = ({ className }: ContactFormProps): JSX.Element => {
  return (
    <Form action="" className={className}>
      <h2>What's up?</h2>

      <InputSection>
        <label htmlFor="full-name">Full Name</label>
        <Input type="text" name="full-name" />
      </InputSection>

      <InputSection>
        <label htmlFor="email-address">Email Address</label>
        <Input type="text" name="email-address" />
      </InputSection>

      <InputSection>
        <label htmlFor="phone-number">Phone No.</label>
        <Input type="text" name="phone-number" />
      </InputSection>

      <InputSection>
        <label htmlFor="subject">Subject</label>
        <Input type="text" name="subject" />
      </InputSection>

      <button>Send Message</button>
    </Form>
  );
};

export default styled(ContactForm)``;
