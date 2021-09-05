import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { pxToRem } from '../styled-components/mixins';

const PageSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
const SiteTitle = styled.h1`
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(64)};
  line-height: ${pxToRem(75)};
  letter-spacing: 0.25rem;
`;

export default ({ location }: PageProps): JSX.Element => {
  const bunny = '../assets/images/rabbit-clear-bg-tall.png';

  return (
    <Layout location={location}>
      <PageSection>
        <StaticImage src={bunny} alt="" />
        <SiteTitle>Mishap Records</SiteTitle>
      </PageSection>
    </Layout>
  );
};
