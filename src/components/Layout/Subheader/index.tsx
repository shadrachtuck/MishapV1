import React from 'react';
import { PageSection } from '../../Sections';
import styled from 'styled-components';
import Bunny from '../../../assets/svg/mishap-rabbit.svg';

type SubheaderProps = {
  className?: string;
};

const Subheader = ({ className }: SubheaderProps): JSX.Element => {
  return (
    <PageSection id="home" className={className}>
      <Bunny />

      <h1>Mishap Records</h1>
    </PageSection>
  );
};

export default styled(Subheader)``;
