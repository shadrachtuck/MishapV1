import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { color } from '../../../styled-components/mixins';
import { Button } from '../../Button';

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

const Label = styled.label``;

const InputSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: 3rem;

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
        <Label htmlFor="full-name">Full Name</Label>
        <Input type="text" name="full-name" />
      </InputSection>

      <InputSection>
        <Label htmlFor="email-address">Email Address</Label>
        <Input type="text" name="email-address" />
      </InputSection>

      <InputSection>
        <Label htmlFor="phone-number">Phone No.</Label>
        <Input type="text" name="phone-number" />
      </InputSection>

      <InputSection>
        <Label htmlFor="subject">Subject</Label>
        <Input as="textarea" name="subject" />
      </InputSection>

      <Button addHoverStyles>Send Message</Button>
    </Form>
  );
};

export default styled(ContactForm)``;
