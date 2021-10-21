import { IGatsbyImageData } from 'gatsby-plugin-image';

export = Strapi;
export as namespace Strapi;
declare namespace Strapi {
  /**
   *  The Strapi object. All data coming from the api
   * is defined here.
   */
  type Strapi = {
    strapi: Data;
  };

  type Data = {
    artist: Artist;
    artists: Array<Artist>;
  };

  type Artist = {
    id: string;
    name: string;
    slug: string;
    bio: string;
    profilePicture: UploadFile;
    socialMedia: ArtistComponents['socialMedia'];
  };

  // components
  type ArtistComponents = {
    socialMedia: SocialMedia;
  };

  type SocialMedia = {
    id: string;
    name: string;
    url: string;
  };

  type UploadFile = {
    id: number;
    url: string;
    caption: string;
    alternativeText: string;
    imageFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}
