import styled, { css } from 'styled-components';

export type SocialMediaNavWrapperProps = {
  displayHorizontally: boolean;
  addVerticalSpacing: boolean;
  iconSize: number;
};

export const ButtonLinksWrapper = styled.ul`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(16.25rem, 1fr));
  gap: 1rem;
`;

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
