import React from 'react';
import styled from 'styled-components';

type ContactInformationProps = {
  className?: string;
};

const ContactInformationWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const ContactInformation = ({
  className,
}: ContactInformationProps): JSX.Element => {
  return (
    <ContactInformationWrapper className={className}>
      <h2>Contact</h2>

      <h3>Address</h3>

      <p>3119 E. Bonview Dr. Boise</p>

      <p>Boise, 83712, US</p>

      <h3>Phone</h3>

      <p>(208) 283-3045</p>

      <h3>Email</h3>

      <p>info@mishaprecords.com</p>
    </ContactInformationWrapper>
  );
};

export default styled(ContactInformation)``;
