import styled from 'styled-components';
import { above } from '../../../styled-components/mixins';

export const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  ${above.medium`
    justify-content: flex-end;
  `}
`;
