import styled from 'styled-components';
import { above, container } from '../../styled-components/mixins';

const MainContent = styled.main`
  display: grid;
  gap: 7.5rem;
  margin-top: calc(${container('height', 'mobileHeader')} * 1.3);
  margin-bottom: 7.5rem;

  ${above.medium`
    gap: 15rem;
    margin-top: 0;
    margin-bottom: 15rem;
  `}
`;

export default MainContent;
