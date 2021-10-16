import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import Contact from '../../components/Contact';
import Layout from '../../components/Layout';
import { pxToRem } from '../../styled-components/mixins';

type HomePageProps = PageProps & {
  data: Array<Strapi.Data['artists']>;
};

const PageSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const SiteTitle = styled.h1`
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(64)};
  line-height: ${pxToRem(75)};
  letter-spacing: 0.25rem;
`;

const Home = (props: HomePageProps): JSX.Element => {
  const bunny = '../assets/svg/rabbit_black.svg';
  console.log(props.data);

  return (
    <Layout {...props}>
      <PageSection id="home">
        <StaticImage src={bunny} alt="" />
        <SiteTitle>Mishap Records</SiteTitle>
      </PageSection>

      <PageSection id="artists">
        <SiteTitle>Artists</SiteTitle>
      </PageSection>

      <PageSection id="store">
        <SiteTitle>Store</SiteTitle>
      </PageSection>

      <PageSection id="contact">
        <Contact />
      </PageSection>
    </Layout>
  );
};

export default Home;
