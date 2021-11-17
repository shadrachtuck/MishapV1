/**
 * This file adds type-safety and structure to all entities
 * coming from the Strapi Headless CMS Api.
 * If any api additions were made to the CMS,
 * add their type declarations here.
 */

import { IGatsbyImageData } from 'gatsby-plugin-image';

// types all collections share
type CommonTypes = {
  id: string;
  name: string;
  slug: string;
};

export = Strapi;
export as namespace Strapi;
declare namespace Strapi {
  /**
   *  The Strapi object. All data coming from the api
   * is defined here.
   */

  // all graphql queries begin with a 'strapi' object
  type Strapi = {
    strapi: Data;
  };

  type Data = {
    artist: Artist;
    artists: Array<Artist>;
    genre: Genre;
    genres: Array<Genre>;
  };

  // collections
  type Artist = CommonTypes & {
    bio: string;
    socialMedia: Array<ArtistComponents['socialMedia']>;
    press: Array<ArtistComponents['press']>;
    profilePicture: UploadFile;
    genres?: Array<Genre>;
    shows?: Array<Show>;
    videos?: Array<MediaComponents['video']>;
    bandcampEmbed?: string;
  };

  type Genre = CommonTypes & {
    artists?: Array<Artist>;
  };

  type Show = CommonTypes & {
    location: string;
    date: string;
    artists?: Array<Artist>;
    poster?: UploadFile;
    description?: string;
  };

  // components
  type ArtistComponents = {
    socialMedia: SocialMedia;
    press: Press;
  };

  type MediaComponents = {
    video: VideoEmbed;
  };

  type VideoEmbed = {
    embedLink: string;
  };

  type Press = {
    link: string;
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
