import styled from 'styled-components';
import { above, padding } from '../../styled-components/utils/mixins';

const PageSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  padding: 0 ${padding('small')};

  &#home {
    display: none;

    ${above.medium`
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
    `}
  }
`;

export default PageSection;
