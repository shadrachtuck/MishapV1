import React from 'react';
import styled from 'styled-components';

type ContactInformationProps = {
  className?: string;
};

const ContactInformationWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ContactInformationSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
`;

const ContactInformation = ({
  className,
}: ContactInformationProps): JSX.Element => {
  return (
    <ContactInformationWrapper className={className}>
      <h2>Contact</h2>

      <h3>Address</h3>

      <ContactInformationSection>
        <p>3119 E. Bonview Dr. Boise</p>

        <p>Boise, 83712, US</p>
      </ContactInformationSection>

      <h3>Phone</h3>

      <p>(208) 283-3045</p>

      <h3>Email</h3>

      <p>info@mishaprecords.com</p>
    </ContactInformationWrapper>
  );
};

export default styled(ContactInformation)``;
