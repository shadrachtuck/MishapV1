import styled from 'styled-components';
import { CloseButton } from '../../components/Button';
import { color } from '../../styled-components/mixins';

const GRID_BORDER = '2rem';

export const ImageWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
`;

export const Profile = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
`;

export const BandcampSection = styled.div`
  grid-row: bandcamp;
`;
export const WatchSection = styled.div`
  grid-row: watch;
`;
export const ShowsSection = styled.div`
  grid-row: shows;
`;

export const LeftSide = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;

export const RightSide = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-rows:
    [bandcamp] minmax(100px, auto)
    [watch] minmax(100px, auto)
    [shows] minmax(100px, auto);
`;

export const ArtistPageWrapper = styled.article`
  display: grid;
  grid-template-columns:
    [border-left] ${GRID_BORDER}
    [left-side] 1fr
    [middle-gutter] ${GRID_BORDER}
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
