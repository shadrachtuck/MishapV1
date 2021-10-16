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
    profile: ArtistComponents['Profile'];
  };

  // components
  type ArtistComponents = {
    Profile: Profile;
    SocialMedia: SocialMedia;
  };

  type SocialMedia = {
    id: string;
    name: string;
    url: string;
  };

  type Profile = {
    id: string;
    name: string;
    bio: string;
    profilePicture: UploadFile;
    socialMedia: ArtistComponents['SocialMedia'];
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
