import { graphql } from 'gatsby';

/*
 Here are all the graphql Fragments (see https://www.gatsbyjs.com/docs/reference/graphql-data-layer/using-graphql-fragments/)
 that can be used across the app. These fragments are reusable snippets
 of graphql that simplify the process of changing anything in the api.

 To use a fragment, simply create one with the following format:

 export const FragmentName = graphql`
  fragment FragmentName on GraphqlObject {
    fieldOne {
      objProperty
    }
    fieldTwo
  }
`;

Then, inside any other query:

query {
  artists {
    name
    bio
    profile_picture {
      ...FragmentName
    }
  }
}

 */

// Gatsby Image
export const ConstrainedImage = graphql`
  fragment ConstrainedImage on File {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1)
    }
  }
`;

export const StrapiUploadFile = graphql`
  fragment StrapiUploadFile on STRAPI_UploadFile {
    id
    url
    caption
    alternativeText
    imageFile {
      ...ConstrainedImage
    }
  }
`;

export const StrapiArtistSocialMedia = graphql`
  fragment StrapiArtistSocialMedia on STRAPI_ComponentArtistsSocialMedia {
    id
    name
    url
  }
`;
