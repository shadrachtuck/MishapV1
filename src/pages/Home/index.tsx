import ArtistCards from '../../components/ArtistCards';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Strapi } from '../../typings/strapi';
import { PageSection } from './styles';

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

const BUNNY = '../../assets/svg/rabbit_black.svg';

const Home = (): JSX.Element => {
  const {
    strapi: { artists },
  } = useStaticQuery<Strapi>(query);

  return (
    <>
      <PageSection id="home">
        <StaticImage src={BUNNY} alt="" />
        <h1>Mishap Records</h1>
      </PageSection>

      <PageSection id="artists">
        <h2>Artists</h2>
        <ArtistCards artists={artists} />
      </PageSection>

      <PageSection id="store">
        <h2>Store</h2>
      </PageSection>
    </>
  );
};

export default Home;
