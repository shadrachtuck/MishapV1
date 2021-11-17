import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import moment from 'moment';
import React, { Fragment } from 'react';
import { CloseButton } from '../../components/Button/';
import Paragraph from '../../components/Paragraph';
import SEO from '../../components/SEO';
import SocialMediaLinks from '../../components/SocialMediaLinks';
import getVideoEmbedLink from '../../utils/functions/getVideoEmbedLink';
import useIsAboveMobileWidth from '../../utils/hooks/useIsAboveMobileWidth';
import { TemplateProps } from '../types';
import {
  ArtistPageWrapper,
  BandcampSection,
  ImageWrapper,
  LeftSide,
  PressSection,
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
        press {
          link
        }
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
        videos {
          embedLink: embed_link
        }
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
          press,
          shows,
          profilePicture,
          socialMedia,
          bandcampEmbed,
          genres,
          videos,
        },
      },
    },
  } = props;

  const isAboveMobile = useIsAboveMobileWidth();
  const shouldDisplayGenreTags = genres && genres.length > 0;
  const shouldDisplayShows = shows && shows.length > 0;
  const shouldDisplayPress = press && press.length > 0;
  const shouldDisplayVideos = videos && videos.length > 0;

  const links = socialMedia.map(({ name, url }) => ({
    name,
    href: url,
  }));

  const shortBio = bio.slice(0, 159);

  return (
    <>
      <SEO title={artistName} description={shortBio} image={profilePicture} />

      <ArtistPageWrapper>
        <CloseButton />

        <LeftSide>
          <Profile>
            <ImageWrapper>
              <GatsbyImage
                alt={profilePicture.alternativeText ?? ''}
                title={profilePicture.caption ?? ''}
                image={
                  profilePicture.imageFile?.childImageSharp?.gatsbyImageData
                }
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

          {shouldDisplayVideos && (
            <WatchSection>
              <h2>Watch: </h2>
              {videos.map(({ embedLink }) => (
                <Fragment key={embedLink}>
                  {/* only show video embed if screen is large enough */}
                  {isAboveMobile ? (
                    <div dangerouslySetInnerHTML={{ __html: embedLink }} />
                  ) : (
                    <p>
                      <a href={getVideoEmbedLink(embedLink)}>Video</a>
                    </p>
                  )}
                </Fragment>
              ))}
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

          {shouldDisplayPress && (
            <PressSection>
              <h2>Press: </h2>
              {press.map(({ link }, idx) => (
                <p key={`${link}-${idx}`}>
                  <a href={link} target="_blank" rel="noreferrer">
                    {link}
                  </a>
                </p>
              ))}
            </PressSection>
          )}

          {/* // TODO: add merch section */}
        </RightSide>
      </ArtistPageWrapper>
    </>
  );
};
