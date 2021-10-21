import ArtistCards from '../../components/ArtistCards';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Contact from '../../components/Contact';
import Layout from '../../components/Layout';
import { Strapi } from '../../typings/strapi';
import { PageSection, SiteTitle } from './styles';

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

const Home = (props: PageProps): JSX.Element => {
  const {
    strapi: { artists },
  } = useStaticQuery<Strapi>(query);

  return (
    <Layout {...props}>
      <PageSection id="home">
        <StaticImage src={BUNNY} alt="" />
        <SiteTitle>Mishap Records</SiteTitle>
      </PageSection>

      <PageSection id="artists">
        <SiteTitle>Artists</SiteTitle>
        <ArtistCards artists={artists} />
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
