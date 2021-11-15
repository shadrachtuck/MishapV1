import {
  color,
  padding,
  pxToRem,
  spacing,
  timing,
} from '../../styled-components/mixins';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const ArtistCardsWrapper = styled.ul`
  display: grid;
  justify-content: center;
  width: 100%;
  gap: ${spacing('medium')};
  grid-template-columns: repeat(
    auto-fit,
    minmax(${pxToRem(300)}, ${pxToRem(350)})
  );
`;

export const ArtistCardWrapper = styled.li`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: ${pxToRem(350)};
  border: 2px solid ${color('black')};
  padding: ${padding('medium')};
  padding-bottom: 0;

  &:hover {
    transform: scale(1.01);
    transition: transform ${timing('fast')} ease-out;
    box-shadow: 1px 1px 5px ${color('gray')};
  }
`;

export const ArtistCardName = styled.span`
  text-transform: uppercase;
  text-decoration: none;
  color: ${color('black')};
  border: none;
  letter-spacing: 0.25rem;
`;

export const ArtistCard = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;
