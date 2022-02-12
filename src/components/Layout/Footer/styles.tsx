import ContactInformation from '../../../components/Contact/ContactInformation';
import styled from 'styled-components';
import ContactForm from '../../../components/Contact/ContactForm';
import { above, color, spacing } from '../../../styled-components/utils/mixins';

export const FooterWrapper = styled.footer`
  ${ContactForm},${ContactInformation} {
    padding: ${spacing('small')} ${spacing('medium')} ${spacing('xlarge')};
  }

  ${ContactForm} {
    background: ${color('black')};
    color: ${color('white')};
  }

  ${above.medium`
    display: grid;
    grid-template-columns: [left] 1fr [right] 1fr;
    justify-content: center;

    ${ContactInformation} {
      padding: ${spacing('xlarge')};
      grid-column: left;
    }

    ${ContactForm} {
      padding: ${spacing('xlarge')};
      grid-column: right;
    }
  `}
`;
