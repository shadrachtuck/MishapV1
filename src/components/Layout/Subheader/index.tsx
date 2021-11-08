import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PageSection } from '../../Sections';
import styled from 'styled-components';

const BUNNY = '../assets/svg/rabbit_black.svg';

type SubheaderProps = {
  className?: string;
};

const Subheader = ({ className }: SubheaderProps): JSX.Element => {
  return (
    <PageSection id="home" className={className}>
      <StaticImage src={BUNNY} alt="" />
      <h1>Mishap Records</h1>
    </PageSection>
  );
};

export default styled(Subheader)``;
