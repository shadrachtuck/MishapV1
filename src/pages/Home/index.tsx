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
        name
        profile {
          ...StrapiArtistProfile
        }
      }
    }
  }
`;

const Home = (props: PageProps): JSX.Element => {
  const bunny = '../../assets/svg/rabbit_black.svg';
  const {
    strapi: { artists },
  } = useStaticQuery<Strapi>(query);

  return (
    <Layout {...props}>
      <PageSection id="home">
        <StaticImage src={bunny} alt="" />
        <SiteTitle>Mishap Records</SiteTitle>
      </PageSection>

      <PageSection id="artists">
        <SiteTitle>Artists</SiteTitle>
        {artists.map(({ id, profile: { name, bio }, slug }) => (
          <div key={`${name}${id}`}>
            <a href={`/artists/${slug}`}>{name}</a>
            <p>{bio}</p>
          </div>
        ))}
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
