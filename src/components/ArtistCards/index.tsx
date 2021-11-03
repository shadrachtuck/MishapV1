import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  ArtistCardsWrapper,
  ArtistCard,
  ArtistCardName,
  ArtistCardWrapper,
} from './styles';
import { routes } from '../../../config';

type ArtistCardProps = {
  artists: Strapi.Data['artists'];
};

const ArtistCards = ({ artists }: ArtistCardProps): JSX.Element => {
  return (
    <ArtistCardsWrapper>
      {artists.map(({ id, name, profilePicture, slug }) => (
        <ArtistCardWrapper key={`${name}${id}`}>
          <ArtistCard href={`${routes.artists}/${slug}`}>
            <GatsbyImage
              image={profilePicture.imageFile.childImageSharp.gatsbyImageData}
              alt={profilePicture.alternativeText}
            />
            {/* TODO: Replace with modal button */}
            <ArtistCardName>{name}</ArtistCardName>
          </ArtistCard>
        </ArtistCardWrapper>
      ))}
    </ArtistCardsWrapper>
  );
};

export default ArtistCards;
