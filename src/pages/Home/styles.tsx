import styled from 'styled-components';
import { pxToRem } from '../../styled-components/mixins';

export const PageSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const SiteTitle = styled.h1`
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  font-size: ${pxToRem(64)};
  line-height: ${pxToRem(75)};
  letter-spacing: 0.25rem;
`;
