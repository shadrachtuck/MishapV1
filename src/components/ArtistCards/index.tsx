import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ArtistCardsWrapper, ArtistCard, ArtistCardLink } from './styles';

type ArtistCardProps = {
  artists: Strapi.Data['artists'];
};

const ArtistCards = ({ artists }: ArtistCardProps): JSX.Element => {
  return (
    <ArtistCardsWrapper>
      {artists.map(({ id, name, profilePicture, slug }) => (
        <ArtistCard key={`${name}${id}`}>
          <GatsbyImage
            image={profilePicture.imageFile.childImageSharp.gatsbyImageData}
            alt={profilePicture.alternativeText}
          />
          {/* TODO: Replace with modal button */}
          <ArtistCardLink href={`/artists/${slug}`}>{name}</ArtistCardLink>
        </ArtistCard>
      ))}
    </ArtistCardsWrapper>
  );
};

export default ArtistCards;
