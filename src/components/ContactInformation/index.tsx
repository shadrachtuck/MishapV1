import React from 'react';
import styled from 'styled-components';

const ContactInformation = ({
  className,
}: Pick<PageProps, 'className'>): JSX.Element => {
  return (
    <div className={className}>
      <h2>Contact</h2>
      <div>
        <h3>Address</h3>
        <p>3119 E. Bonview Dr. Boise</p>
        <p>Boise, 83716, Us</p>

        <h3>Phone</h3>
        <p>(208) 283-3045</p>

        <h3>Email</h3>
        <p>info@mishaprecords.com</p>
      </div>
    </div>
  );
};

export default styled(ContactInformation)``;
