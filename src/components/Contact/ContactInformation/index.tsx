import React from 'react';
import styled from 'styled-components';
import {
  ContactInformationWrapper,
  ContactInformationSection,
  ContactInformationSubSection,
} from './styles';

type ContactInformationProps = {
  className?: string;
};

const ContactInformation = ({
  className,
}: ContactInformationProps): JSX.Element => {
  return (
    <ContactInformationWrapper className={className}>
      <h2>Contact</h2>

      <ContactInformationSection>
        <h3>Address</h3>
        <ContactInformationSubSection>
          <p>3119 E. Bonview Dr. Boise</p>

          <p>Boise, 83712, US</p>
        </ContactInformationSubSection>
      </ContactInformationSection>

      <ContactInformationSection>
        <h3>Phone</h3>

        <p>(208) 283-3045</p>
      </ContactInformationSection>

      <ContactInformationSection>
        <h3>Email</h3>

        <p>info@mishaprecords.com</p>
      </ContactInformationSection>
    </ContactInformationWrapper>
  );
};

export default styled(ContactInformation)``;
