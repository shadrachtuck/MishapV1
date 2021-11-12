import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ArtistCards from '../components/ArtistCards';
import { PageSection } from '../components/Sections';
import { Strapi } from '../typings/strapi';

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

  return (
    <PageSection id="artists">
      <ArtistCards artists={artists} />
    </PageSection>
  );
};

export default Home;
