import { graphql, navigate, PageRenderer } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import { color, timing } from '../../styled-components/mixins';
import styled from 'styled-components';
import { TemplateProps } from '../types';
import SocialMediaLinks from '../../components/SocialMediaLinks';
import CloseButton from '../../components/CloseButton';

export const query = graphql`
  query GET_ARTIST($id: ID!) {
    strapi {
      artist(id: $id) {
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

const GRID_BORDER = '2rem';

const Profile = styled.div``;

const BandcampSection = styled.div`
  grid-row: bandcamp;
`;
const ListenSection = styled.div`
  grid-row: listen;
`;
const WatchSection = styled.div`
  grid-row: watch;
`;
const ShowsSection = styled.div`
  grid-row: shows;
`;
const MerchSection = styled.div`
  grid-row: merch;
`;
const PressSection = styled.div`
  grid-row: press;
`;

const LeftSide = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;

const RightSide = styled.div`
  display: grid;
  grid-template-rows:
    [bandcamp] minmax(100px, auto)
    [listen] minmax(100px, auto)
    [watch] minmax(100px, auto)
    [shows] minmax(100px, auto)
    [merch] minmax(100px, auto)
    [press] minmax(100px, auto);
`;

const ArtistPageWrapper = styled.article`
  display: grid;
  grid-template-columns:
    [border-left] ${GRID_BORDER}
    [left-side] 1fr
    [right-side] 1fr
    [border-right] ${GRID_BORDER};
  grid-template-rows:
    [border-top] ${GRID_BORDER}
    [content] auto
    [border-bottom] ${GRID_BORDER};
  border: 4px solid ${color('black')};

  ${CloseButton} {
    grid-row: border-top;
    grid-column: border-right;
  }

  ${LeftSide} {
    grid-column: left-side;
    grid-row: content;
  }

  ${RightSide} {
    grid-column: right-side;
    grid-row: content;
  }
`;

export default (props: TemplateProps): JSX.Element => {
  const {
    data: {
      strapi: {
        artist: { name: artistName, bio, profilePicture },
      },
    },
    theme,
  } = props;

  // const building = typeof window === 'undefined';
  // const [indexPageData, setIndexPageData] = useState(
  //   !building && window.indexPageData,
  // );
  // useEffect(() => {
  //   window.setIndexPageData = () => {
  //     setIndexPageData(window.indexPageData);
  //   };
  // }, []);

  // const [modalOpen, setModalOpen] = useState(true);
  const modalCloseTimeout = timing('fast', theme, false)();

  // const closeModal = (): void => {
  //   setModalOpen(false);
  //   setTimeout(() => navigate(`/`), modalCloseTimeout);
  // };

  return (
    <ArtistPageWrapper>
      <CloseButton />
      {/* top */}
      <LeftSide>
        <Profile>
          <GatsbyImage
            alt={profilePicture.alternativeText ?? ''}
            title={profilePicture.caption ?? ''}
            image={profilePicture.imageFile?.childImageSharp?.gatsbyImageData}
          />
          <SocialMediaLinks />
          <h2>{artistName}</h2>
          {/* Add genre tags here */}

          {bio}
        </Profile>
      </LeftSide>

      <RightSide>
        <BandcampSection>
          <h2>bandcamp</h2>
        </BandcampSection>

        <ListenSection>
          <h2>listen: </h2>
        </ListenSection>

        <WatchSection>
          <h2>watch: </h2>
        </WatchSection>

        <ShowsSection>
          <h2>shows: </h2>
        </ShowsSection>

        <MerchSection>
          <h2>merch: </h2>
        </MerchSection>

        <PressSection>
          <h2>press: </h2>
        </PressSection>
        {/* bottom */}
      </RightSide>
    </ArtistPageWrapper>
  );
};
