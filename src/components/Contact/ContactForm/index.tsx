import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
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
const encode = (data: Record<string, string | number | boolean>): string =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const ContactForm = ({ className }: ContactFormProps): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [isSent, setIsSent] = useState(false);

  // reset button text after three seconds
  useEffect(() => {
    // don't run if nothing is sent
    if (!isSent) return;

    const resetIsSent = setTimeout(() => setIsSent(false), 3000);

    return () => {
      clearTimeout(resetIsSent);
    };
  }, [isSent]);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phoneNumber,
      subject,
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    }).catch(err => alert(err));

    setName('');
    setEmail('');
    setPhoneNumber('');
    setSubject('');
    setIsSent(true);
  };

  return (
    <Form
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
      className={className}
      data-netlify="true"
    >
      <h2>What's up?</h2>

      <InputSection>
        <Label htmlFor="name">Full Name</Label>

        <Input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </InputSection>

      <InputSection>
        <Label htmlFor="email">Email Address</Label>

        <Input
          type="text"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </InputSection>

      <InputSection>
        <Label htmlFor="phone-number">Phone No.</Label>

        <Input
          type="text"
          name="phone-number"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
      </InputSection>

      <InputSection>
        <Label htmlFor="subject">Subject</Label>

        <Input
          as="textarea"
          name="subject"
          value={subject}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setSubject(e.target.value)
          }
        />
      </InputSection>

      <Button addHoverStyles>{isSent ? 'Message sent' : 'Send Message'}</Button>
    </Form>
  );
};

export default styled(ContactForm)``;
