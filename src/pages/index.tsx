import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import ArtistCards from '../components/ArtistCards';
import Layout from '../components/Layout';
import { Strapi } from '../typings/strapi';
import useIsAboveMobileWidth from '../utils/hooks/useIsAboveMobileWidth';

export const query = graphql`
  query GET_ARTISTS {
    strapi {
      artists {
        slug
        name
        bio
        socialMedia: social_media {
          ...StrapiArtistSocialMedia
        }
        profilePicture: profile_picture {
          ...StrapiUploadFile
        }
      }
    }
  }
`;

export const PageSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const BUNNY = '../assets/svg/rabbit_black.svg';

const Home = (): JSX.Element => {
  const isAboveMobile = useIsAboveMobileWidth();

  const {
    strapi: { artists },
  } = useStaticQuery<Strapi>(query);

  return (
    <Layout>
      <>
        {isAboveMobile && (
          <PageSection id="home">
            <StaticImage src={BUNNY} alt="" />
            <h1>Mishap Records</h1>
          </PageSection>
        )}
      </>

      <PageSection id="artists">
        <ArtistCards artists={artists} />
      </PageSection>
    </Layout>
  );
};

export default Home;
