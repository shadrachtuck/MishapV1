import styled from 'styled-components';
import { CloseButton } from '../../components/Button';
import {
  above,
  border,
  padding,
  spacing,
} from '../../styled-components/utils/mixins';

const GRID_BORDER = '2rem';

export const ImageWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
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

export const PressSection = styled.div`
  grid-row: press;
`;

export const LeftSide = styled.div`
  display: grid;
`;

export const RightSide = styled.div`
  display: grid;
  gap: 4rem;

  grid-template-rows:
    [bandcamp] minmax(0, auto)
    [watch] minmax(0, auto)
    [shows] minmax(0, auto)
    [press] minmax(0, auto);
`;

export const ArtistPageWrapper = styled.article`
  display: grid;
  grid-template-rows: 1fr;
  gap: 4rem;
  margin: 0 ${spacing('xxsmall')};
  /* TODO: change to grid layout padding */
  padding: ${padding('xsmall')};
  border: ${border('solidBlack')};

  ${above.medium`
    margin: 0;
    padding: 0;
    gap: 0;

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


    ${CloseButton} {
      grid-row: border-top;
      grid-column: border-right;
    }

    ${LeftSide} {
      grid-template-rows: auto auto;
      grid-column: left-side;
      grid-row: content;

      ${ImageWrapper} {
        flex-flow: row;
        align-items: flex-end;
      }
    }

    ${RightSide} {
      grid-column: right-side;
      grid-row: content;
    }
  `}
`;
