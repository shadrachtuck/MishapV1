import styled from 'styled-components';
import { NavbarProps } from '.';
import { pxToRem } from '../../../styled-components/utils/mixins';

export const Navbar = styled.ul<NavbarProps>`
  display: flex;
  gap: ${pxToRem(50)};
  flex-flow: ${({ displayHorizontally }) =>
    displayHorizontally ? 'row wrap' : 'column nowrap'};

  li {
    a {
      color: ${({ color = 'black' }) => color};
    }
  }
`;
