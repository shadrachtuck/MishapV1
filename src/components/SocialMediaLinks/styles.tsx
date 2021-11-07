import styled, { css } from 'styled-components';

export type SocialMediaNavWrapperProps = {
  displayHorizontally: boolean;
  addVerticalSpacing: boolean;
  iconSize: number;
};

export const SocialMediaLinksWrapper = styled.ul<SocialMediaNavWrapperProps>`
  display: flex;

  ${({ addVerticalSpacing }) =>
    addVerticalSpacing &&
    css`
      margin: 2rem 0;
    `};

  svg {
    width: ${({ iconSize }) => iconSize}px;
    height: ${({ iconSize }) => iconSize}px;
  }

  ${({ displayHorizontally }) =>
    displayHorizontally
      ? css`
          flex-flow: row wrap;
          justify-content: space-around;
        `
      : css`
          // horizontal
          flex-flow: column nowrap;
          gap: 1rem;
        `}
`;
