import {
  color,
  padding,
  pxToRem,
  spacing,
} from '../../styled-components/mixins';
import styled from 'styled-components';

export const ArtistCardsWrapper = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  gap: ${spacing('medium')};
  grid-template-columns: repeat(
    auto-fit,
    minmax(${pxToRem(300)}, ${pxToRem(350)})
  );
`;

export const ArtistCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: ${pxToRem(350)};
  border: 2px solid ${color('black')};
  padding: ${padding('medium')};
  padding-bottom: 0;
`;

export const ArtistCardLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: ${color('black')};
  border: none;
  letter-spacing: 0.25rem;
`;
