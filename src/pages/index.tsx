import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Bunny from '../assets/svg/mishap-rabbit.svg';
import ArtistCards from '../components/ArtistCards';
import { PageSection } from '../components/Sections';
import SEO from '../components/SEO';
import { Strapi } from '../typings/strapi';

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

  return (
    <>
      <SEO />

      <PageSection id="home">
        <Bunny />
        <h1>Mishap Records</h1>
        <h2>Boise, Idaho</h2>
      </PageSection>

      <PageSection id="artists">
        <h2>Artists</h2>
        <ArtistCards artists={artists} />
      </PageSection>

      <PageSection id="about">
        <h2>About</h2>

        <p>
          <strong>Mishap Records</strong> is a cool music band label from PNW
          hot-bed, Boise, ID featuring like-minded, dead-sexy individuals from
          here and throughout the modern urban/sub-urban bland-scape. Founded in
          2017 by Shadrach Tuck and his comrades, Mishap launched in 2021 as a
          subsidiary of Earth Libraries.
        </p>

        <p>
          Mishap was made with the shared vision of pushing each other to finish
          projects and release music/art. We provide art direction for
          individuals who are ready to take that next step in their craft. The
          label releases everything from singer-songwriter and experimental art
          rock, to noise, jazz, and metal. We produce videos and merchandise and
          are focused on the idea of pushing the boundaries of what art looks
          and sounds like in this small town and beyond.
        </p>
      </PageSection>
    </>
  );
};

export default Home;
