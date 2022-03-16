import styled, { css } from 'styled-components';
import {
  color,
  getFontProperties,
  padding,
  timing,
} from '../../styled-components/utils/mixins';

type ButtonProps = {
  addHoverStyles?: boolean;
};

export const Button = styled.button<ButtonProps>`
  border-radius: 2px;
  cursor: pointer;
  padding: ${padding('xxsmall')};
  ${getFontProperties({
    family: 'roboto',
    letterSpacing: 'middle',
  })}

  ${({ addHoverStyles }) =>
    addHoverStyles &&
    css`
      &:hover {
        background: ${color('gray')};
        transform: scale(1.01);
        transition-duration: ${timing('fast')};
        transition-timing-function: cubic-bezier(0.27, 0.14, 0.54, 1.24);
      }

      &:active {
        transform: scale(0.95);
      }
    `}
`;

export const HiddenButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  margin: 0;
  background: transparent;

  svg {
    width: 65%;
    height: 65%;
  }
`;

// button variants with additional logic separated into files for cleanliness
export { default as CloseButton } from './CloseButton';
export { default as ScrollButton } from './ScrollButton';
