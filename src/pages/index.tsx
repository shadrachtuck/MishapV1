import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Bunny from '../assets/svg/mishap-rabbit.svg';
import ArtistCards from '../components/ArtistCards';
import { PageSection } from '../components/Sections';
import SEO from '../components/SEO';
import { Strapi } from '../typings/strapi';
import useIsAboveMobileWidth from '../utils/hooks/useIsAboveMobileWidth';

export const query = graphql`
  query GET_ARTISTS {
    strapi {
      artists(sort: "name:asc") {
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

const Home = (): JSX.Element => {
  const {
    strapi: { artists },
  } = useStaticQuery<Strapi>(query);
  const isAboveMobile = useIsAboveMobileWidth();

  return (
    <>
      <SEO />
      {isAboveMobile && (
        <PageSection id="home">
          <Bunny />
          <h1>Mishap Records</h1>
          <h2>Boise, Idaho</h2>
        </PageSection>
      )}

      <PageSection id="artists">
        <h2>Artists</h2>
        <ArtistCards artists={artists} />
      </PageSection>

      <PageSection id="about">
        <h2>About</h2>
        <p>
          <strong>Mishap Records</strong> is a cool music band label from PNW
          hot-bed Boise, ID featuring like-minded, dead-sexy individuals from
          here and throughout the modern urban/sub-urban bland-scape. Founded in
          2017 and launched in 2021. Subsidiary of Earth Libraries.
        </p>
      </PageSection>
    </>
  );
};

export default Home;
