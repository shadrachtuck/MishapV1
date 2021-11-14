import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import moment from 'moment';
import React from 'react';
import { CloseButton } from '../../components/Button/';
import Paragraph from '../../components/Paragraph';
import SocialMediaLinks from '../../components/SocialMediaLinks';
import getVideoEmbedLink from '../../utils/functions/getVideoEmbedLink';
import useIsAboveMobileWidth from '../../utils/hooks/useIsAboveMobileWidth';
import { TemplateProps } from '../types';
import {
  ArtistPageWrapper,
  BandcampSection,
  ImageWrapper,
  LeftSide,
  Profile,
  RightSide,
  ShowsSection,
  WatchSection,
} from './styles';

export const query = graphql`
  query GET_ARTIST($id: ID!) {
    strapi {
      artist(id: $id) {
        name
        bio
        genres {
          id
          name
          slug
        }
        shows {
          name
          location
          date
          description
        }
        bandcampEmbed: bandcamp_embed
        videoEmbed: video_embed
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

export default (props: TemplateProps): JSX.Element => {
  const {
    data: {
      strapi: {
        artist: {
          name: artistName,
          bio,
          shows,
          profilePicture,
          socialMedia,
          bandcampEmbed,
          genres,
          videoEmbed,
        },
      },
    },
  } = props;

  const isAboveMobile = useIsAboveMobileWidth();
  const shouldDisplayGenreTags = genres && genres.length > 0;
  const shouldDisplayShows = shows && shows.length > 0;

  const links = socialMedia.map(({ name, url }) => ({
    name,
    href: url,
  }));

  return (
    <ArtistPageWrapper>
      <CloseButton />

      <LeftSide>
        <Profile>
          <ImageWrapper>
            <GatsbyImage
              alt={profilePicture.alternativeText ?? ''}
              title={profilePicture.caption ?? ''}
              image={profilePicture.imageFile?.childImageSharp?.gatsbyImageData}
            />

            <SocialMediaLinks
              links={links}
              iconSize={25}
              addVerticalSpacing={false}
              displayHorizontally={!isAboveMobile}
            />
          </ImageWrapper>

          <h2>{artistName}</h2>

          {/* Add link to genres page? */}
          {shouldDisplayGenreTags && (
            <p>
              {genres.map(({ id, name }, idx) => (
                <strong key={`${id}-${name}`}>
                  {name}
                  {idx !== genres.length - 1 && ' / '}
                </strong>
              ))}
            </p>
          )}

          <p>{bio}</p>
        </Profile>
      </LeftSide>

      <RightSide>
        {bandcampEmbed && (
          <BandcampSection>
            <h2>Listen: </h2>
            <div dangerouslySetInnerHTML={{ __html: bandcampEmbed }} />
          </BandcampSection>
        )}

        {videoEmbed && (
          <WatchSection>
            <h2>Watch: </h2>

            {/* only show video embed if screen is large enough */}
            {isAboveMobile ? (
              <div dangerouslySetInnerHTML={{ __html: videoEmbed }} />
            ) : (
              <a href={getVideoEmbedLink(videoEmbed)}>Video</a>
            )}
          </WatchSection>
        )}

        {shouldDisplayShows && (
          <ShowsSection>
            <h2>Shows: </h2>

            {shows.map(({ id, name, location, date, description }) => (
              <div key={`${id}-${name}`}>
                <p>{name}</p>

                <p>{location}</p>

                <p> {moment(date).format('DD MM YYYY hh:mm:ss')}</p>

                {description && <Paragraph text={description} />}
              </div>
            ))}
          </ShowsSection>
        )}

        {/* // TODO: add merch and press */}
      </RightSide>
    </ArtistPageWrapper>
  );
};
