import React from 'react';
import styled from 'styled-components';
import Contact from '../../../components/Contact';

type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps): JSX.Element => {
  return (
    <section id="contact" className={className}>
      <Contact />
    </section>
  );
};

export default styled(Footer)``;
