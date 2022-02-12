import styled from 'styled-components';
import {
  boxShadow,
  color,
  container,
} from '../../../styled-components/utils/mixins';

export const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MobileHeaderElement = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${container('height', 'mobileHeader')};
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: ${boxShadow('low')};
  background-color: ${color('white')};
  z-index: 1000;
`;

// ensures the same size container as SVG's on mobile menu
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.25rem;
`;
