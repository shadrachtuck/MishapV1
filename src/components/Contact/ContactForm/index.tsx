import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../Button';
import { Form, InputSection, Label, Input } from './styles';

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
        {/* Not showing up? */}
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
