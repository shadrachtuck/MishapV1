import styled from 'styled-components';
import { above, padding } from '../../../../styled-components/utils/mixins';
import config from '../../../../../config';

export const LinkToHome = styled.a.attrs({
  href: config.routes.home,
})`
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LeftSidebarWrapper = styled.aside`
  display: flex;
  flex-flow: column nowrap;

  ${above.medium`
    padding: ${padding('small')} 0;
    justify-content: space-between;
    position: sticky;
    height: 100vh;
    top: 0;
    left: 0;
  `}
`;
