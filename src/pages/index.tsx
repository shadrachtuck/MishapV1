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
        </PageSection>
      )}

      <PageSection id="artists">
        <ArtistCards artists={artists} />
      </PageSection>
    </>
  );
};

export default Home;
