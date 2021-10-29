import styled, { css } from 'styled-components';
import {
  color,
  getFontProperties,
  padding,
  timing,
} from '../../styled-components/mixins';

type ButtonProps = {
  addHoverStyles?: boolean;
};

export const Button = styled.button<ButtonProps>`
  border-radius: 2px;
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
  background: transparent;

  svg {
    width: 65%;
    height: 65%;
  }
`;

// button variants with additional logic separated into files for cleanliness
export { default as CloseButton } from './CloseButton';
export { default as ScrollButton } from './ScrollButton';
