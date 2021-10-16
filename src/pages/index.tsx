import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Home from './Home';

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

type Props = Omit<PageProps, 'data'> & {
  data: Array<Strapi.Data['artists']>;
};

export default (props: Props): JSX.Element => (
  <Home {...props} data={props.data} />
);
