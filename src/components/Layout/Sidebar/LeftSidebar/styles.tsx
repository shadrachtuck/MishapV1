import styled from 'styled-components';
import { above } from '../../../../styled-components/mixins';

export const LeftSidebarWrapper = styled.aside`
  display: flex;
  flex-flow: column nowrap;

  ${above.medium`
    justify-content: space-between;
    position: sticky;
    height: 100vh;
    top: 0;
    left: 0;
  `}
`;
