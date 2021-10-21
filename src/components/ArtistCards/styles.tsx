import {
  colors,
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
  border: 2px solid ${colors('black')};
  padding: ${padding('medium')};
`;

export const ArtistCardLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors('black')};
  border: none;
  letter-spacing: 0.25rem;
`;
