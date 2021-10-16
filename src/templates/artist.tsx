import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import { TemplateProps } from './types';

export const query = graphql`
  query GET_ARTIST($id: ID!) {
    strapi {
      artist(id: $id) {
        name
        profile {
          ...StrapiArtistProfile
        }
      }
    }
  }
`;

export default (props: TemplateProps): JSX.Element => {
  const {
    data: {
      strapi: {
        artist: {
          id,
          name: artistName,
          profile: { bio, profilePicture },
        },
      },
    },
    location,
  } = props;

  return (
    <Layout location={location}>
      <div>
        {/* top */}
        <GatsbyImage
          alt={profilePicture.alternativeText ?? ''}
          title={profilePicture.caption ?? ''}
          image={profilePicture.imageFile?.childImageSharp?.gatsbyImageData}
        />
        <h2>{artistName}</h2>
        {/* Add genre tags here */}
      </div>
      <div>
        {/* bottom */}
        {bio}
      </div>
    </Layout>
  );
};
